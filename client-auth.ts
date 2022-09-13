const msal = require('@azure/msal-node');
import dotenv from 'dotenv';
dotenv.config();

/**
 * Configuration object to be passed to MSAL instance on creation. 
 * For a full list of MSAL Node configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/configuration.md 
 */
const clientId = process.env.PROXY_APP_ID
const tenantId = process.env.PROXY_APP_TENANT_ID
const endpoint = process.env.AAD_ENDPOINT ?? ''
const clientSecret = process.env.PROXY_APP_SECRET ?? ''
const msalConfig = {
	auth: {
		clientId,
		authority: endpoint + tenantId,
		clientSecret,
	}
};

/**
 * With client credentials flows permissions need to be granted in the portal by a tenant administrator.
 * The scope is always in the format '<resource>/.default'. For more, visit: 
 * https://docs.microsoft.com/azure/active-directory/develop/v2-oauth2-client-creds-grant-flow 
 */
export const tokenRequest = {
	scopes: ['https://graph.microsoft.com/.default'],
};

export const apiConfig = {
	uri: process.env.GRAPH_HOST + 'v1.0/users',
};

/**
 * Initialize a confidential client application. For more info, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-node/docs/initialize-confidential-client-application.md
 */
const cca = new msal.ConfidentialClientApplication(msalConfig);

/**
 * Acquires token with client credentials.
 * @param {object} tokenRequest 
 */
export async function getToken(tokenRequest: any) {
	return await cca.acquireTokenByClientCredential(tokenRequest);
}