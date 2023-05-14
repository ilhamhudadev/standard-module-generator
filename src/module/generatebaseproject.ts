import { UserInputModel } from '../data/model/userInputmodel';
import * as vscode from 'vscode';
// import * as mkdirp from 'mkdirp';
const { mkdirp } = require('mkdirp');
import fs = require('fs');

import { foldersBaseProjectConstant } from '../data/constant/folders';


export async function generateBaseProject(inUri: vscode.Uri | undefined) {
  const openOpts: vscode.OpenDialogOptions = { canSelectMany: false, canSelectFiles: false, canSelectFolders: true };

  var uri: vscode.Uri;
   if (inUri === undefined) {
    const userUri = await vscode.window.showOpenDialog(openOpts);
    if (userUri === undefined) {
        throw Error("Aborted");
    }
    uri = userUri[0];
} else {
    uri = inUri;
}

    const paths = uri.path.split("/");


  if (!paths.includes('lib') ) {
    return vscode.window.showErrorMessage("Please create under lib");
  }
  for (const data of foldersBaseProjectConstant) {
    const d = uri.path + "/";
    const newp = d + data;
    await mkdirp(newp);
  }


}


