/*
 * NOTA:
 * - Este script deve ser configurado como Step 2 na automação do Automation Studio.
 * - O Step 1 deve ser uma Query Activity que filtra e insere os contatos a serem excluídos na Data Extension.
 * - Certifique-se de que a Data Extension utilizada seja "Sendable".
 *
 * NOTE:
 * - This script should be configured as Step 2 in Automation Studio.
 * - Step 1 must be a Query Activity that filters and inserts the contacts to be deleted into the Data Extension.
 * - Ensure that the Data Extension used is "Sendable".
 */


<script runat="server">
Platform.Load("Core", "1");

// ***********************
// Configurações de Autenticação
// ***********************
var subdomain   = "{{SUBDOMAIN}}"; 
var authUrl     = "https://" + subdomain + ".auth.marketingcloudapis.com/v2/token";
var contentType = "application/json";

// Atualize com suas credenciais e MID (account_id)
var payload = '{"grant_type": "client_credentials", "client_id": "{{CLIENT_ID}}", "client_secret": "{{CLIENT_SECRET}}", "account_id": "{{ACCOUNT_ID}}"}';

var accessTokenResult = HTTP.Post(authUrl, contentType, payload);
var accessToken = Platform.Function.ParseJSON(accessTokenResult["Response"][0]).access_token;

if (accessToken != "") {
    try {
        // ***********************
        // Executa a exclusão utilizando listReference
        // ***********************
        var deleteUrl = "https://" + subdomain + ".rest.marketingcloudapis.com/contacts/v1/contacts/actions/delete?type=listReference";
        
        /* 
         * Certifique-se de que a Data Extension (referenciada pelo listKey) esteja configurada como lista no Contact Builder.
         * O listKey deve ser a External Key da sua Data Extension.
         */
        var payload1 = '{"deleteOperationType": "ContactAndAttributes",'+
                       '"targetList": {'+
                           '"listType": {"listTypeID": 3},'+
                           '"listKey": "{{LIST_KEY}}"' +
                       '},'+
                       '"deleteListWhenCompleted": false,'+
                       '"deleteListContentsWhenCompleted": false}';
        
        var headerNames  = ["Authorization"];
        var headerValues = ["Bearer " + accessToken];
        var result = HTTP.Post(deleteUrl, contentType, payload1, headerNames, headerValues);
        
        Write("Resultado da exclusão: " + result.Response[0]);
    } catch (ex) {
        Write("Exception Error: " + Stringify(ex));
    }
} else {
    Write("Falha ao obter token de acesso.");
}
</script>
