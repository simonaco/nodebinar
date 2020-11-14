# nodebinar  [![Build Status](https://dev.azure.com/sicotin/sicotin/_apis/build/status/simonaco.nodebinar)](https://dev.azure.com/sicotin/sicotin/_build/latest?definitionId=10) 

If you want to learn more about getting started with serverless using VS Code and watch a demo of Azure API Management you can register [here](https://info.microsoft.com/demand-build-serverless-api-with-nodejs.html?WT.mc_id=startup-0000-sicotin) and you'll get a recorded version of the webinar.  

## Deploy resources

[![Deploy to Azure](https://azuredeploy.net/deploybutton.png)](https://portal.azure.com/?WT.mc_id=startup-0000-sicotin#create/Microsoft.Template/uri/https%3A%2F%2Fraw.githubusercontent.com%2Fsimonaco%2Fnodebinar%2Fmaster%2Fazuredeploy.json)

## Prerequisites

1. A recent version of Node (8+)

1. VS Code: [here](https://code.visualstudio.com/download/?WT.mc_id=startup-0000-sicotin)  

1. Azure Functions CLI: [here](https://docs.microsoft.com/azure/azure-functions/functions-run-local?WT.mc_id=startup-0000-sicotin)  

1. Azure Functions Extension for VS Code: [here](https://marketplace.visualstudio.com/items/?WT.mc_id=startup-0000-sicotin&itemName=ms-azuretools.vscode-azurefunctions)  

1. Azure account: [https://aka.ms/free](https://aka.ms/free)

## Run locally

1. Install all dependencies by running `npm i`

1. In [VS Code](https://code.visualstudio.com/download/?WT.mc_id=startup-0000-sicotin), go to the [Azure Functions](https://marketplace.visualstudio.com/items/?WT.mc_id=startup-0000-sicotin&itemName=ms-azuretools.vscode-azurefunctions) extension and click on `Create New Project...` icon. This will create a local.settings.json file for us and configure local debugging.  

1. In `local.settings.json`, setup your environment variables for connecting to your database: 

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "user": "your-db-user",
    "password": "your-db-password",
    "port": "your-db-port"
  }
}
```

1. In VS Code, go to the Debugging panel and run application by cliking on the `Start debugging` icon (small play button on the left hand side of the top bar)

---

<span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background: url(chrome-extension://immhpnclomdloikkpcefncmfgjbkojmh/emoji-data/sheet_apple_32.png);background-position:16.039952996474735% 71.97414806110459%;background-size:5418.75% 5418.75%" data-codepoints="1f389"></span></span> Congrats!! You made it - built your very first endpoint on Serverless! <span class="emoji-outer emoji-sizer"><span class="emoji-inner" style="background: url(chrome-extension://immhpnclomdloikkpcefncmfgjbkojmh/emoji-data/sheet_apple_32.png);background-position:16.039952996474735% 71.97414806110459%;background-size:5418.75% 5418.75%" data-codepoints="1f389"></span></span>

---
Bonus: If interested to learn more about serverless make sure to checkout the free self guided courses on [Microsoft Learn Serverless Path](https://docs.microsoft.com/learn/browse/?roles=developer&products=azure-functions&WT.mc_id=startup-0000-sicotin)
