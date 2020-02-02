#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { PracticeAwsCdkStack } from '../lib/practice-aws-cdk-stack';

const app = new cdk.App();
new PracticeAwsCdkStack(app, 'PracticeAwsCdkStack');
