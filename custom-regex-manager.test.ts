// @ts-ignore
import { expect, test } from "bun:test";
import { genericSourceMatch, genericDockerImageMatch } from "./custom-regex-manager";

test("minimal capture with `# renovate docker image`", () => {
    const regex = new RegExp(genericSourceMatch, "g");
    const doc = `tag: 1.73.0 # renovate docker nginx`;
    const results = regex.exec(doc)?.groups;
    expect(results?.currentValue).toBe("1.73.0");
    expect(results?.dataSource).toBe("docker");
    expect(results?.depName).toBe("nginx");
});

test("minimal capture with `# renovate docker` for docker images", () => {
    const regex = new RegExp(genericDockerImageMatch, "g");
    const doc = `image: nginx:1.73.0 # renovate`;
    const results = regex.exec(doc)?.groups;
    expect(results?.currentValue).toBe("1.73.0");
    expect(results?.depName).toBe("nginx");
});
