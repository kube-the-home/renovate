# renovate

Shared [Renovate](https://docs.renovatebot.com/) configuration for the `kube-the-home` GitHub organization.

## Usage

Extend the default config in any repository:

```json
{
  "extends": ["github>kube-the-home/renovate"]
}
```

## What's included

- Semantic commits mapped by update type (`fix` for patches, `feat` for minor/major)
- Separate PRs for major, minor, and patch updates
- Vulnerability alerts enabled
- Dependency dashboard
- Lock file maintenance
- Git submodule updates
- Regex managers for inline `# renovate` comments (generic and Docker image syntax)

## Presets

| Preset | Description |
|--------|-------------|
| `presets/components/github-actions.json` | Pins GitHub Actions to digests; disables noisy digest-only update PRs |

Extend a preset directly:

```json
{
  "extends": ["github>kube-the-home/renovate//presets/components/github-actions.json"]
}
```

## Inline renovate comments

Mark any value in any file for tracking:

```yaml
# Generic (specify datasource and package name)
image: "1.21.0" # renovate docker nginx

# Docker image shorthand
nginx:1.21.0 # renovate
```
