import React, { useEffect, useRef, useState } from 'react';
import { Container, Content, NotFound } from './styles';
import Plus from '../../assets/plus.png';
import Wallet from '../../assets/wallet.png';
import api from '../../api/api.json';
import { Link } from 'react-router-dom';

interface ClientsProps {
  id: number;
  name: string;
  phone: string;
  cpf: string;
  bank: BankProps;
}

interface BankProps {
  label: string;
  accountTypeLabel: string;
  accountNumber: string;
}

const Loan: React.FC = () => {
  const [clients, setClients] = useState<ClientsProps[]>([]);
  const cpfInput = useRef<HTMLInputElement>(null);
  const [selectedClient, setSelectedClient] = useState<ClientsProps>();

  useEffect(() => {
    setClients(api.client);
  }, []);

  function handleFindClient() {
    const client = clients.find(
      (client) => cpfInput.current?.value === client.cpf
    );

    setSelectedClient(client);
  }

  return (
    <Container>
      <Content>
        <div className='title'>
          <img src={Plus} alt='plus' />
          <img src={Wallet} className='wallet' alt='wallet' />
          <h1>Solicitar Empréstimo</h1>
        </div>
        <div className='value'>
          <h2>Busque o cliente</h2>
          <div>
            <input type='text' ref={cpfInput} />
            <button onClick={handleFindClient}>Buscar</button>
          </div>

          {selectedClient ? (
            <div className='client'>
              <h1>Cliente encontrado:</h1>
              <h2>{selectedClient?.cpf}</h2>
              <strong>{selectedClient?.name}</strong>
              <Link to='/loan'>
                <button>Solicitar</button>
              </Link>
            </div>
          ) : (
            <NotFound>Cliente não encontrado!!!</NotFound>
          )}
        </div>
      </Content>
    </Container>
  );
};

export default Loan;
