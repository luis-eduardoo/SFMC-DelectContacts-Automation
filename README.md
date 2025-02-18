# [🇧🇷] SFMC-DelectContacts-Automation: Automatizando a Exclusão de Contatos no Salesforce Marketing Cloud 🗑️

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
- Acesse o **Contact Configuration** e habilite a funcionalidade de exclusão de contatos em sua BU.

![image](https://github.com/user-attachments/assets/559b44a4-f47d-4482-ac8b-d1081aa4411a)

- Se necessário, ajuste as configurações ou contate o suporte para liberar esta funcionalidade.
- Caso seja necessário, clique em **Manage Settings** e altere a supressão para **0 dias**.  
  _(Apenas faça isso se estiver seguro do processo.)_

### 3. Configuração da Data Extension
- A Data Extension que armazena os contatos a serem deletados deve ser _Sendable_.
- Anote a **External Key** da Data Extension para referenciá-la no script.

### 4. Acompanhe o Processo de Deleção na Aba **Contact Analytics**
- A aba **Contact Analytics** ficará disponível somente após a habilitação da funcionalidade de exclusão de contatos em sua BU.
- A exclusão dos contatos é realizada de forma **assíncrona**.
- Pode haver um período em que os contatos ainda permanecem visíveis até que o processo seja concluído  
  _(aguarde alguns minutos)_.

⚠️ **ATENÇÃO - Riscos e Considerações Importantes** ⚠️  
A exclusão de contatos é uma ação irreversível. Certifique-se de revisar os contatos a serem deletados e realizar backups, se necessário.

- **Ação Irreversível:** Uma vez que um contato é excluído, o processo não pode ser desfeito.
- **Perda de Histórico:** Ao apagar um contato, você perderá todo o histórico de engajamento associado, como aberturas, cliques, conversões e outras interações.
- **Perda de Dados do Dispositivo:** Informações como DeviceID e outros dados relacionados aos dispositivos utilizados pelos contatos serão removidos.
- **Perda de Atributos Personalizados:** Qualquer dado adicional, como atributos customizados e preferências, será perdido, o que pode impactar análises futuras e segmentações.
- **Impacto nas Métricas:** A remoção de contatos pode afetar relatórios e métricas previamente consolidadas, alterando a visão geral da performance da sua conta.

Recomenda-se realizar testes em um ambiente controlado e manter backups dos dados antes de proceder com a exclusão completa.

---

✒️ Este código foi baseado nos conteúdos e nas ideias apresentadas nos seguintes artigos:  
- [Digital Marketing on Cloud](https://digitalmarketingoncloud.com/salesforce-marketing-cloud/contact-deletion-in-marketing-cloud/) by Lukas Lunow  
- [Salesforce StackExchange](https://salesforce.stackexchange.com/questions/245799/trying-to-automate-contact-deletion-with-ssjs)  

Caso tenha qualquer tipo de dúvida ou sugestão, fico disponível pelo meu LinkedIn. 😁 🤙

---

# [EN] SFMC-DelectContacts-Automation: Automating Contact Deletion in Salesforce Marketing Cloud 🗑️

## Prerequisites

### 1. Creating a Package in Marketing Cloud
- **Installed Package:**
  - Create an *Installed Package* in your Salesforce Marketing Cloud account.
  - Add a **Server-to-Server API Integration** component.
  - Grant the necessary permissions to access the endpoint:
    ```
    /contacts/v1/contacts/actions/delete
    ```
  - Note down the following values:
    - **Client ID**
    - **Client Secret**
    - **Subdomain**
    - **MID**

### 2. Enabling Contact Deletion in Your Account
- Access **Contact Configuration** and enable the contact deletion feature in your Business Unit (BU).

![image](https://github.com/user-attachments/assets/559b44a4-f47d-4482-ac8b-d1081aa4411a)

- If necessary, adjust the settings or contact support to enable this functionality.
- If required, click on **Manage Settings** and set the suppression period to **0 days**.  
  _(Only do this if you are sure about the process.)_

### 3. Configuring the Data Extension
- The Data Extension that stores the contacts to be deleted must be _Sendable_.
- Note the **External Key** of the Data Extension to reference it in the script.

### 4. Monitoring the Deletion Process in the **Contact Analytics** Tab
- The **Contact Analytics** tab will only be available after enabling the contact deletion feature in your BU.
- Contact deletion is performed **asynchronously**.
- There might be a delay during which contacts remain visible until the process is complete  
  _(please wait a few minutes)_.

⚠️ **WARNING - Risks and Important Considerations** ⚠️  
Contact deletion is an irreversible action. Make sure to review the contacts to be deleted and back up your data if necessary.

- **Irreversible Action:** Once a contact is deleted, the process cannot be undone.
- **Loss of History:** Deleting a contact will remove all associated engagement history, such as opens, clicks, conversions, and other interactions.
- **Loss of Device Data:** Information such as DeviceID and other data related to the devices used by contacts will be removed.
- **Loss of Custom Attributes:** Any additional data, such as custom attributes and preferences, will be lost, which may impact future analyses and segmentation.
- **Impact on Metrics:** Removing contacts can affect consolidated reports and metrics, altering the overall performance view of your account.

It is recommended to test in a controlled environment and back up your data before proceeding with complete deletion.

---

✒️ This code is based on the content and ideas presented in the following articles:  
- [Digital Marketing on Cloud](https://digitalmarketingoncloud.com/salesforce-marketing-cloud/contact-deletion-in-marketing-cloud/) by Lukas Lunow  
- [Salesforce StackExchange](https://salesforce.stackexchange.com/questions/245799/trying-to-automate-contact-deletion-with-ssjs)

If you have any questions or suggestions, feel free to reach out to me on LinkedIn. 😁 🤙
