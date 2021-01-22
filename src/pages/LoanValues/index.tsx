import React from 'react';
import { Container, Content } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const LoanValues: React.FC = () => {
  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
          <div className='box'>
            <h1>Tabela</h1>
            <input type='text' placeholder='Tabela Padrão' />
          </div>
        </div>
        <section>
          <div className='upper'>
            <div className='box'>
              <h1>Valor desejado:</h1>
              <input type='text' placeholder='R$ 1.000,00' />
            </div>
            <div className='box'>
              <h1>Valor Total do Empréstimo:</h1>
              <input type='text' placeholder='R$ 1.000,00' />
            </div>
          </div>
          <div className='lower'>
            <div className='box'>
              <h1>Parcelas:</h1>
              <input type='text' placeholder='3' />
            </div>
            <div className='box'>
              <h1>Valor da parcela:</h1>
              <input type='text' placeholder='R$ 1.000,00' />
            </div>
          </div>
        </section>
        <div className='contractType'>
          <h1>Escolha a modalidade:</h1>
          <div>
            <button>Automático</button>
            <button>Manual</button>
            <Link to='/loanRealized'>
              <button>
                <FiCheck size={50} /> Concluir
              </button>
            </Link>
          </div>
        </div>

        <table>
          <tbody>
            <tr>
              <td colSpan={5} className='name'>
                Tabela Padrão
              </td>
            </tr>
            <tr className='head'>
              <td>Parcela</td>
              <td>Juros da Parcela</td>
              <td>Valor da Parcela</td>
              <td>Valor Total</td>
              <td>Comissão Parceiro</td>
            </tr>
            <tr>
              <td>1</td>
              <td>15%</td>
              <td>R$1.115,00 </td>
              <td>R$1.115,00 </td>
              <td>R$1.115,00 </td>
            </tr>
            <tr>
              <td>2</td>
              <td>20%</td>
              <td>R$1.115,00 </td>
              <td>R$1.115,00 </td>
              <td>R$1.115,00 </td>
            </tr>
            <tr>
              <td>3</td>
              <td>25%</td>
              <td>R$1.115,00 </td>
              <td>R$1.115,00 </td>
              <td>R$1.115,00 </td>
            </tr>
          </tbody>
        </table>
      </Content>
    </Container>
  );
};

export default LoanValues;
