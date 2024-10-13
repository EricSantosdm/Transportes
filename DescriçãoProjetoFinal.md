### a. Descrição do problema a ser solucionado e arquitetura da solução

#### Problema:
A UFERSA necessita de um sistema para gerenciar a solicitação de viagens e diárias de seus colaboradores e discentes. O sistema deve permitir o cadastro e acompanhamento de solicitações de viagem, incluindo informações sobre destino, roteiro, objetivo, datas e anexos necessários. Além disso, o sistema deve controlar a aprovação e o status das solicitações, com relatórios para a administração.

#### Arquitetura da Solução:
A arquitetura proposta utiliza serviços da AWS para oferecer uma solução escalável e segura. Os componentes principais incluem:

1. **Frontend**: Utilizando o **Amazon S3** para armazenar o conteúdo estático (HTML, CSS, JavaScript) e **Amazon CloudFront** para distribuição de conteúdo, garantindo baixa latência.  
   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/428px-Amazon-S3-Logo.svg.png?20220427001138" alt="Amazon S3" width="50" height="50">  <img src="https://static.cdnlogo.com/logos/a/31/aws-cloudfront.svg" alt="Amazon CloudFront" width="50" height="50">

2. **Backend**: Desenvolvido em **AWS Lambda** para processamento sem servidor (serverless), gerenciando as requisições de API.  
   <img src="https://static.cdnlogo.com/logos/a/47/aws-lambda.svg" alt="AWS Lambda" width="50" height="50">

3. **Banco de Dados**: Utilizando o **Amazon RDS (Relational Database Service)** com MySQL para armazenar os dados relacionados às viagens, como informações de solicitantes, destinos, datas, roteiros, e status de aprovação.  
   <img src="https://static.cdnlogo.com/logos/a/2/amazon-database.svg" alt="Amazon RDS" width="50" height="50">

4. **Autenticação e Autorização**: Usando o **AWS Cognito** para gerenciar a autenticação e autorização de usuários.  
   <img src="https://static.cdnlogo.com/logos/a/40/aws-cognito.svg" alt="AWS Cognito" width="50" height="50">

5. **Gerenciamento de Domínio e Certificados**: Utilizando o **Amazon Route 53** para gerenciar o DNS e **AWS Certificate Manager** para provisionar certificados SSL para o domínio.  
   <img src="https://static.cdnlogo.com/logos/a/42/aws-route53.svg" alt="Amazon Route 53" width="50" height="50">

### b. Autenticação e Autorização

A funcionalidade de autenticação e autorização será implementada com o **AWS Cognito**, que permite criar e gerenciar grupos de usuários. Os principais recursos dessa funcionalidade incluem:

- **Registro e Login de Usuários**: Os usuários poderão se cadastrar e fazer login usando e-mail e senha.
- **Autenticação Multifator (MFA)**: Para aumentar a segurança, a autenticação multifator será ativada.
- **Autorização por Função**: Diferentes permissões serão atribuídas com base no tipo de usuário (administrador, solicitante, aprovador).
- **Integração com API Gateway**: Para garantir que apenas usuários autenticados possam acessar os endpoints protegidos do backend.

### c. Frontend com DNS válido

O frontend será hospedado em um domínio válido sob o domínio principal da UFERSA. A configuração será feita da seguinte forma:

- **Nome do Domínio**: `transportes.eric.dev.ufsersa.dev.br`
- **Endereços DNS responsáveis pelo domínio**:
  - Nameservers gerenciados pelo **Amazon Route 53**.
  - Será utilizado o **AWS Certificate Manager** para gerenciar certificados SSL.

### d. Dados a serem armazenados e manipulados no backend

Os dados armazenados no backend incluirão:

- **Informações do Solicitante**: Nome, matrícula, e-mail, tipo de usuário (servidor, discente).
- **Dados da Viagem**: Destino, roteiro, objetivo, datas de ida e volta, meios de transporte.
- **Solicitação de Serviço**: Tipo de diária (nacional/internacional), transporte solicitado, justificativas.
- **Anexos**: Arquivos PDF ou imagens de documentos adicionais necessários.
- **Status das Solicitações**: Em andamento, aprovado, rejeitado, concluído.
- **Logs e Histórico de Aprovações**: Registro de alterações e aprovações.

### e. Estimativa de Preço da Infraestrutura

A estimativa de custos para a arquitetura descrita é baseada nos serviços utilizados:

1. **Amazon S3**: $0.023/GB por mês para armazenamento + custos de transferência de dados.
2. **Amazon CloudFront**: $0.085/GB para a primeira 10 TB/mês.
3. **AWS Lambda**: $0.20 por 1 milhão de solicitações, com 400.000 GB-segundos gratuitos por mês.
4. **Amazon RDS (MySQL)**: A partir de $0.018/hora para uma instância db.t4g.micro.
5. **AWS Cognito**: Até 50.000 usuários ativos mensais gratuitos, com custos adicionais para mais usuários.
6. **Amazon Route 53**: $0.50 por zona hospedada por mês + $0.40 por milhão de consultas DNS.

Essas estimativas variam com base no uso real, número de usuários e tráfego de dados.
