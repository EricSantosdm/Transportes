###
Eric dos Santos Bezerra 

### Descrição do Problema:
O processo manual de solicitação de diárias e viagens na UFERSA é suscetível a erros, atrasos e dificuldades de controle. Um sistema automatizado pode resolver esses problemas ao fornecer uma forma rápida e precisa de gerar documentos, rastrear aprovações e organizar as informações.

### Objetivo:
Criar um sistema web simples para facilitar a criação e gestão de documentos de solicitação de diárias e viagens, eliminando a necessidade de processos manuais e organizando melhor o fluxo de aprovação dentro da UFERSA.

### Funcionalidades:
1. **Cadastro de Usuários (Servidores da UFERSA):** 
   - Login integrado com o sistema de autenticação da universidade.
   - Perfis com diferentes permissões (usuários e aprovadores).
   
2. **Criação de Solicitações de Viagem:**
   - Formulário para inserir detalhes da viagem.
   - Validação automática de campos obrigatórios.
   
3. **Fluxo de Aprovação:**
   - Aprovadores recebem solicitações e podem aprovar ou rejeitar as viagens.

4. **Relatórios e Histórico:**
   - Histórico de solicitações para consulta e relatórios simplificados.

5. **Notificações Internas:**
   - Notificações via e-mail ou alertas internos para aprovações ou rejeições.

---

### Detalhamento Técnico Simplificado

#### 1. **Front-End:**
   - Framework: React.js ou outra escolha leve como Vue.js.
   - Autenticação integrada com o SIGAA da UFERSA.
   - Interface simples com um dashboard para acompanhamento das solicitações.

#### 2. **Back-End:**
   - Linguagem: Node.js com Express ou Python com Flask/Django.
   - API REST para interações com o front-end.
   - Gerenciamento de permissões de usuário e controle de fluxo de aprovação.

#### 3. **Banco de Dados:**
   - PostgreSQL ou MySQL para armazenar os dados de usuários, solicitações e aprovações.
   - Estrutura simples com tabelas para usuários, viagens e aprovações.

---

### Arquitetura Simplificada:

1. **Front-End:** A interface de usuário será acessada pelos servidores e aprovadores da UFERSA. Pode ser hospedada localmente ou em um serviço de nuvem simples como AWS EC2 ou Heroku.
2. **Back-End:** Servidor que gerencia as requisições, valida as entradas e interage com o banco de dados para salvar e recuperar informações.
3. **Banco de Dados:** PostgreSQL ou MySQL armazenando as informações das solicitações, aprovações e usuários.

---


### Arquitetura do Sistema com Serviços AWS

#### 1. **Front-End:**
   - **Serviço AWS Utilizado: AWS S3**  
     O **AWS S3 (Simple Storage Service)** será utilizado para hospedar o front-end estático (HTML, CSS, JavaScript) do sistema. Isso permite uma entrega rápida e escalável de conteúdo, com baixa latência e alta disponibilidade.
   
   - **Serviço AWS Utilizado: AWS CloudFront**  
     Para distribuir o conteúdo hospedado no S3 com baixa latência globalmente, o **AWS CloudFront** será utilizado. Ele também oferece integração com HTTPS para segurança no tráfego de dados.

#### 2. **Back-End:**
   - **Serviço AWS Utilizado: AWS EC2**  
     O **AWS EC2 (Elastic Compute Cloud)** será utilizado para hospedar o back-end do sistema. O EC2 permite o gerenciamento e escalabilidade de servidores, podendo rodar o código do back-end em Node.js, Python ou outra linguagem de escolha. A EC2 é flexível e pode ser escalada de acordo com o tráfego e as demandas do sistema.
   
   - **Alternativa: AWS Lambda**  
     Como alternativa ao EC2, o **AWS Lambda** pode ser utilizado para rodar funções event-driven sem a necessidade de gerenciar servidores. Cada vez que um usuário realiza uma ação (como envio de solicitação), uma função Lambda pode ser executada para processar essa ação. Isso reduz custos, especialmente para sistemas de baixa demanda.

#### 3. **Banco de Dados:**
   - **Serviço AWS Utilizado: AWS RDS**  
     O **AWS RDS (Relational Database Service)** será o serviço responsável pelo gerenciamento do banco de dados. O RDS oferece suporte a vários sistemas de gerenciamento de banco de dados como PostgreSQL e MySQL, que podem ser utilizados para armazenar os dados das solicitações de viagens, usuários, histórico de aprovações, entre outros. Ele também oferece backups automáticos, replicação, e alta disponibilidade.

#### 4. **Armazenamento de Documentos:**
   - **Serviço AWS Utilizado: AWS S3**  
     O **AWS S3** também será utilizado para armazenar


### Diagrama Simplificado:

```
+------------------+          +---------------------+         +------------------+
|                  |          |                     |         |                  |
|  Front-End (UI)  | <------> |  Back-End (API)      | <-----> |  Banco de Dados  |
|                  |          |  (Node.js/Python)    |         |  (PostgreSQL)    |
|                  |          |                     |         |                  |
+------------------+          +---------------------+         +------------------+
```

---

### Considerações:
Esse design simplificado é ideal para um sistema inicial, oferecendo a funcionalidade necessária com baixa complexidade e fácil manutenção. A arquitetura de três camadas (front-end, back-end e banco de dados) garante flexibilidade e escalabilidade conforme o sistema evolui.
