"use client";
//AWS-AMPLIFY
import { Amplify, type ResourcesConfig } from 'aws-amplify';


const cognitoConfig: ResourcesConfig["Auth"] = {
    Cognito: {
        userPoolId: "eu-west-1_cjsOJPAd6",
        userPoolClientId: "3h4hi14a2m9ts2bm9vvcumrkog"
    }
}


Amplify.configure({ Auth: cognitoConfig });


export default function ConfigureAmplifyClientSide() {
    return null;
}