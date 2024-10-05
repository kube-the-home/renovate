// @ts-ignore: exposed by bun
import * as fs from "fs";
import { genericDockerImageMatch, genericSourceMatch } from "./custom-regex-manager";

const renovateConfig = {
    "$schema": "https://docs.renovatebot.com/renovate-schema.json",
    extends: [
        "config:recommended",
        ":enableRenovate",
        ":enableVulnerabilityAlerts",
        ":dependencyDashboard",
        "group:monorepos",
        "group:recommended",
        "workarounds:all"
    ],
    semanticCommits: "enabled",
    separateMajorMinor: true,
    separateMinorPatch: true,
    separateMultipleMajor: true,

    lockFileMaintenance: {
        enabled: true
    },
    "git-submodules": {
        enabled: true
    },

    regexManagers: [
        {
            fileMatch: ["^.*$"],
            matchStrings: [genericSourceMatch]
        },
        {
            fileMatch: ["^.*$"],
            datasourceTemplate: "docker",
            matchStrings: [genericDockerImageMatch]
        }
    ],
}

const filename = `default.json`;
const json = JSON.stringify(renovateConfig, null, 2) + "\n";
const encoding = 'UTF-8';
fs.writeFileSync(filename, json, encoding);
