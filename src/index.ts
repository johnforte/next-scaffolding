#!/usr/bin/env node

import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {GenerateCommand} from "./commands";

yargs(hideBin(process.argv))
    .command('generate <page>', 'create and scaffold a next page', ()=>{}, GenerateCommand)
    .parse();
