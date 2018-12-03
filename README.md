# nodebinar  [![Build Status](https://dev.azure.com/sicotin/sicotin/_apis/build/status/simonaco.nodebinar)](https://dev.azure.com/sicotin/sicotin/_build/latest?definitionId=10)

## Prerequisites

1. A recent version of Node (8+)

1. VS Code: [here](https://code.visualstudio.com/download/?WT.mc_id=github-readme-sicotin)  

1. Azure Functions CLI: [here](https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?WT.mc_id=github-readme-sicotin)  

1. Azure Functions Extension for VS Code: [here](https://marketplace.visualstudio.com/items/?WT.mc_id=github-readme-sicotin&itemName=ms-azuretools.vscode-azurefunctions)  

1. Azure account: [https://aka.ms/free](https://aka.ms/free)

## Run locally

1. Install all dependencies by running `npm i`

1. In [VS Code](https://code.visualstudio.com/download/?WT.mc_id=github-readme-sicotin), go to the [Azure Functions](https://marketplace.visualstudio.com/items/?WT.mc_id=github-readme-sicotin&itemName=ms-azuretools.vscode-azurefunctions) extension and click on `Create New Project...` icon. This will create a local.settings.json file for us and configure local debugging.  

1. In `local.settings.json`, setup your environment variables for connecting to your database: 

```json
{
  "IsEncrypted": false,
  "Values": {
    "AzureWebJobsStorage": "",
    "FUNCTIONS_WORKER_RUNTIME": "node",
    "user": "your-db-user",
    "password": "your-db-password",
    "url": "mongodb://your-db-user.documents.azure.com:10255/?ssl=true"
  }
}
```

1. In VS Code, go to the Debugging panel and run application by cliking on the `Start debugging` icon (small play button on the left hand side of the top bar)

---

🎉 Congrats!! You made it - built your very first GraphQL endpoint on Serverless! 🎉

---
Bonus: If interested to learn more about serverless make sure to checkout the free self guided courses on [Microsoft Learn Serverless Path](https://aka.ms/learn-serverless)