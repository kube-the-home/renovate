export const genericSourceMatch = `[\"']{0,1}(?<currentValue>[^\\s\"']*)[\"']{0,1}\\s+#\\s+(renovate\\s+)(?<dataSource>[^\\s\"']+)\\s+(?<depName>[^\\s\"']+)`;

export const genericDockerImageMatch = `[\"']{0,1}(?<depName>[^\\s\"']+):(?<currentValue>[^\\s\"']*)[\"']{0,1}\\s+#\\s+(renovate)`;

