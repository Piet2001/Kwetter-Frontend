import { LogLevel } from "@azure/msal-browser";

/**
 * Configuration object to be passed to MSAL instance on creation.
 * For a full list of MSAL.js configuration parameters, visit:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const msalConfig = {
    auth: {
        clientId: process.env.REACT_APP_KWETTER_FRONTEND_ID, // This is the ONLY mandatory field that you need to supply.
        authority: `https://login.microsoftonline.com/${process.env.REACT_APP_KWETTER_TENANT_ID}`, // Defaults to "https://login.microsoftonline.com/common"
        redirectUri: process.env.NODE_ENV === 'production' ? "https://piet2001.github.io/" : "http://localhost:3000/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
        // postLogoutRedirectUri: process.env.NODE_ENV === 'production' ? "https://piet2001.github.io/Kwetter-Frontend/" : "http://localhost:3000/Kwetter-Frontend", // Indicates the page to navigate after logout.
        navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
        cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
        storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
        loggerOptions: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii) {
                    return;
                }
                switch (level) {
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            }
        }
    }
};

/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit:
 * https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
    scopes: [process.env.REACT_APP_USER_API],
};

/**
 * Add here the endpoints and scopes when obtaining an access token for protected web APIs. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */

export const protectedResources = {
    graphMe: {
        endpoint: "https://graph.microsoft.com/v1.0/me",
        scopes: ["User.Read"],
    },
    apiMessage: {
        endpoint: process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_URL}/` : `${process.env.REACT_APP_API_URL}`, //"http://localhost:5000/message/"
        scopes: [process.env.REACT_APP_MESSAGE_API], // e.g. api://xxxxxx/access_as_user
    },
    apiUser: {
        endpoint: process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_URL}/` : `${process.env.REACT_APP_API_URL}`, //"http://localhost:5000/user/"
        scopes: [process.env.REACT_APP_MESSAGE_API], // e.g. api://xxxxxx/access_as_user
    },
}

