![image](https://github.com/user-attachments/assets/bcf7d6f4-b050-44c4-999c-7d8c5761eb57)# [🇧🇷] SFMC-DelectContacts-Automation: Automatizando a Exclusão de Contatos no Salesforce Marketing Cloud

## Pré-Requisitos

### 1. Criação do Package no Marketing Cloud
- **Installed Package:**
  - Crie um *Installed Package* na sua conta Salesforce Marketing Cloud.
  - Adicione um componente de **API Integration (Server-to-Server)**.
  - Conceda as permissões necessárias para acessar o endpoint:
    ```
    /contacts/v1/contacts/actions/delete
    ```
  - Anote os seguintes valores:
    - **Client ID**
    - **Client Secret**
    - **Subdomínio**
    - **MID**

### 2. Habilitar a Exclusão de Contatos na Conta
- Acesse o **Contact Configuration** e habilite funcionalidade de exclusão de contatos em sua BU.

![image](https://github.com/user-attachments/assets/559b44a4-f47d-4482-ac8b-d1081aa4411a)

- Se necessário, ajuste as configurações ou contate o suporte para liberar esta funcionalidade.
- Caso seja necessário, clique em **Manage Settings** e altere a supressão para 0 dias. _*(apenas faça isso se estiver seguro do processo)_

### 3. Configuração da Data Extension
- A Data Extension que armazena os contatos que serão deletados deve ser _Sendable_.
- Anote a **External Key** da Data Extension para referenciá-la no script.

### 4. Acompanhe o processo de Deleção na aba **Contact Analytics**
- A aba Contact Analytics só ficará disponível quando você habilite funcionalidade de exclusão de contatos em sua BU.
- A exclusão dos contatos é realizada de forma **assíncrona**.
- Pode haver um período em que os contatos ainda permanecem visíveis até que o processo seja concluído _(aguarde alguns minutos)_.

**ATENÇÃO**  
A exclusão de contatos é uma ação irreversível. Certifique-se de revisar os contatos a serem deletados e realizar backups, se necessário.
