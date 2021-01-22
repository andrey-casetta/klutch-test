import React, { useRef, useState } from 'react';
import { Container, Content, Footer } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import api from '../../api/api.json';
import { Link } from 'react-router-dom';

interface TableProps {
  id: number;
  name: string;
  installments: InstallmentProps[];
}

interface InstallmentProps {
  id: number;
  installments: number;
  installmentInterest: number;
  installmentValue: number;
  fullValue: number;
  comission: number;
}

const Main: React.FC = () => {
  const [tables, setTables] = useState<TableProps[]>([]);
  const [error, setError] = useState('');
  const [selectedTable, setSelectedTable] = useState<TableProps>();
  const [installment, setInstallment] = useState(0);
  const [installmentValue, setInstallmentValue] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSelectTable(id: number) {
    const table = tables.find((tab) => id === tab.id);
    setSelectedTable(table);
  }

  function setRow(
    table: number,
    installment: number,
    installmentValue: number
  ) {
    handleSelectTable(table);
    setInstallment(installment);
    setInstallmentValue(installmentValue);
  }

  function checkValue() {
    const inputStringValue = inputRef.current?.value;
    if (inputStringValue !== undefined) {
      const intValue = parseInt(inputStringValue);

      if (intValue > 300 && intValue < 10000) {
        setError('');
        setTables(api.rateTable);
      } else {
        setError('Valor deve ser maior que R$ 300,00 e menor que R$ 10.000,00');
      }
    }
  }

  return (
    <>
      <Container>
        <Content>
          <div className='title'>
            <img src={Plus} alt='plus' />
            <img src={Wallet} className='wallet' alt='wallet' />
            <h1>Simulação de Taxas</h1>
          </div>
          <div className='value'>
            <h2>Valor Desejado</h2>
            <div>
              <div>
                <input type='number' placeholder='R$ 0,00' ref={inputRef} />
                {error && <span>{error}</span>}
              </div>
              <button onClick={checkValue}>Calcular</button>
            </div>
          </div>

          {tables.map((table) => (
            <table key={table.name}>
              <tbody>
                <tr>
                  <td colSpan={6} className='name'>
                    {table.name}
                  </td>
                </tr>
                <tr className='head'>
                  <td
                    rowSpan={table.installments.length + 1}
                    className='radio'
                    onClick={() => handleSelectTable(table.id)}
                  >
                    <input type='radio' />
                  </td>
                  <td>Parcela</td>
                  <td>Juros da Parcela</td>
                  <td>Valor da Parcela</td>
                  <td>Valor Total</td>
                  <td>Comissão Parceiro</td>
                </tr>
                {table.installments.map((installment) => (
                  <tr
                    key={installment.id}
                    // className={}
                    onClick={() =>
                      setRow(
                        table.id,
                        installment.installments,
                        installment.installmentValue
                      )
                    }
                  >
                    <td>{installment.installments}</td>
                    <td>{installment.installmentInterest}%</td>
                    <td>R$ {installment.installmentValue}</td>
                    <td>R$ {installment.fullValue}</td>
                    <td>R$ {installment.comission}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ))}
        </Content>
      </Container>
      <Footer>
        <h1>Nome: {selectedTable?.name}</h1>
        <h1>Parcelas: {installment}</h1>
        <h1>Valor da Parcela: {installmentValue}</h1>
        <Link to='/cpf'>
          <button>Avançar</button>
        </Link>
      </Footer>
    </>
  );
};

export default Main;
