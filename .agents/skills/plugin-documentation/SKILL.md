---
name: plugin-documentation
description: Understand Authula plugin documentation structure and format. Generate consistent, complete plugin documentation following the standard 7-section pattern (Overview, Configuration, API Reference, Database Schema, Features/Hooks, Examples). Use when reading, writing, or updating plugin docs.
license: Apache-2.0
---

# Plugin Documentation Skill

## When to use this skill

Use this skill when:

- **Reading plugin docs**: You need to understand how a plugin works, what entities it manages, what APIs it exposes, what database tables it creates
- **Writing new plugin docs**: Creating documentation for a new Authula plugin following established patterns
- **Updating existing docs**: Improving, fixing, or extending documentation for an existing plugin
- **Consistency review**: Ensuring plugin documentation follows the standard structure and style guide

All Authula plugins follow a consistent documentation format defined in this skill.

## Standard Documentation Structure

The Authula plugin documentation follows a **7-section pattern**:

1. **Overview** — What the plugin does, core entities, high-level features
2. **Configuration** — How to enable and configure (both standalone TOML and library Go modes)
3. **API Reference** — HTTP endpoints and their purpose
4. **Database Schema** — Tables created, fields, relationships, migrations
5. **Plugin Capabilities** — Special features, lifecycle hooks, customization points
6. **Examples** — Real-world usage patterns (optional but recommended)
7. **Troubleshooting / Additional Notes** — Common issues, edge cases (optional)

### Header Structure

```markdown
# Plugin Name

## Overview

...

## Configuration

`Standalone Mode:`
...

`Library Mode:`
...

## API Reference

...

## Database Schema

...

## Plugin Capabilities

...
```

This ensures consistent navigation and makes it easy for users to find information.

---

## Detailed Section Guidance

### 1. Overview Section

**Purpose**: Introduce the plugin at a high level without requiring knowledge of configuration or implementation details.

**What to include**:

- One sentence summary of what the plugin does
- List of **Core Entities** (data models the plugin manages)
- **Authorization** rules if applicable (who can perform what actions)
- **Features** (bullet list of key capabilities)

**Example structure**:

```markdown
## Overview

The [Plugin Name] plugin provides [brief description of functionality].

### Features

- **Feature 1** — Description of feature 1
- **Feature 2** — Description of feature 2
- **Feature 3** — Description of feature 3
```

**Tips**:

- Features should be written in short bullet points to keep it short and concise.
- Avoid implementation details; focus on what the plugin does, not how it does it.

---

### 2. Configuration Section

**Purpose**: Show how to enable and configure the plugin in both deployment modes.

**Structure**: Two subsections with code blocks

#### Standalone Mode

Shows TOML configuration for running Authula as a flat-file backed service.

```markdown
`Standalone Mode:`

\`\`\`toml
[plugin-name]
enabled = true

# other configuration options

key = "value"
\`\`\`
```

#### Library Mode

Shows Go code with the plugin Config struct, typically including optional hooks.

```markdown
`Library Mode:`

\`\`\`go
pluginname.New(&types.PluginNamePluginConfig{
Enabled: true,
// ... other fields including any library mode specific config such as database hooks etc.
})
\`\`\`
```

**Tips**:

- Always show both Standalone and Library modes
- Use realistic configuration (copy from actual plugin code if available)
- Include optional hooks in Library mode (reference the Capabilities section)
- Use backtick markdown code blocks with language hints (`toml`, `go`)
- Make sure configuration examples include all required fields and are syntactically correct

---

### 3. API Reference Section

**Purpose**: Exhaustive list of all HTTP endpoints the plugin exposes.

**Format**: Table with columns:

- HTTP Method (GET, POST, PATCH, PUT, DELETE)
- Route Path (RESTful path with variable segments in `{braces}`)
- Description (1-3 words describing the operation)

**Example**:

```markdown
## API Reference

| HTTP Method | Route Path         | Description       |
| ----------- | ------------------ | ----------------- |
| `GET`       | `/todos`           | List user's todos |
| `POST`      | `/todos`           | Create todo       |
| `GET`       | `/todos/{todo_id}` | Get todo          |
| `PATCH`     | `/todos/{todo_id}` | Update todo       |
| `DELETE`    | `/todos/{todo_id}` | Delete todo       |
```

**Tips**:

- Keep routes consistent with REST conventions (GET for read, POST for create, PATCH/PUT for update, DELETE for delete)
- Use descriptive variable names: `{todo_id}`, etc.
- Sort by logical grouping (e.g., all todo endpoints, then other related endpoints)
- Descriptions should match HTTP method intent (e.g., "Create" for POST, "List" for GET collections, "Update" for PATCH/PUT)
- Include all endpoints, even if some are simple reflections of others

---

### 4. Database Schema Section

**Purpose**: Document all database tables created by the plugin, their fields, relationships, and migrations notes.

**Structure**: One subsection per table

#### Table Template

```markdown
### Table: `table_name`

| Field                 | Type      | Key | Description                       |
| --------------------- | --------- | --- | --------------------------------- |
| `id`                  | UUID      | PK  | Unique identifier for the record  |
| `title`               | string    | -   | Title of the todo                 |
| `description`         | string    | -   | Description of the todo           |
| `is_complete`         | boolean   | -   | Indicates if the todo is complete |
| `some_optional_field` | string?   | -   | Some optional field               |
| `created_at`          | timestamp | -   | Record creation time              |
| `updated_at`          | timestamp | -   | Record last update time           |
```

**Field Table Columns**:

- **Field**: Column name (use backticks)
- **Type**: Data type (UUID, string, int, boolean, timestamp, JSON, etc.)
- **Key**: PK (Primary Key), FK (Foreign Key), or `-` (none)
- **Description**: What the field represents, including references for foreign keys (e.g., "Reference to the user")

**Tips**:

- All tables should follow the actual source code schema
- Foreign keys should reference specific tables (e.g., "Reference to the user" or "Reference to the entity e.g. `todo`")
- JSON fields should document their structure inline: "Arbitrary key-value metadata"
- Include a note after all tables: "Migrations are automatically handled when the plugin is initialized" so users know they don't need to run manual migrations
- For complex relationships, consider adding a diagram comment

**Common field patterns**:

```markdown
| `id` | UUID | PK | Unique identifier for the [entity] |
| `user_id` | UUID | FK | Reference to the user |
| `metadata` | JSON | - | Additional [entity] metadata |
| `created_at` | timestamp | - | Record creation time |
| `updated_at` | timestamp | - | Record last update time |
```

---

### 5. Database Hooks (if applicable)

```markdown
### Database Hooks

[Plugin Name] plugin supports the following database hooks:

- `BeforeCreateTodo`: Description of when this fires
- `AfterCreateTodo`: Description of when this fires
- `BeforeUpdateTodo`: Description of when this fires
- `AfterUpdateTodo`: Description of when this fires
- `BeforeDeleteTodo`: Description of when this fires
- `AfterDeleteTodo`: Description of when this fires

NOTE: Database Hooks are only supported in Library mode.

\`Library mode:\`

\`\`\`go
import (
pluginpkg "github.com/Authula/authula/plugins/pluginname"
)

func customBeforeCreateTodo(ctx context.Context, todo \*models.Todo) error {
// Your custom logic
return nil
}

plugin := pluginpkg.New(&types.PluginNamePluginConfig{
Enabled: true,
DatabaseHooks: &types.PluginNameDatabaseHooksConfig{
BeforeCreateTodo: customBeforeCreateTodo,
},
})
\`\`\`
```

---

### 6. Plugin Capabilities Section

**Purpose**: Explain the available capabilities and hooks.

**Structure**:

- Overview paragraph
- **Hooks** (if applicable)
- Other specialized features (if applicable)

```markdown
### Plugin Capabilities

The [Plugin Name] plugin provides the following capabilities:

- Bullet point list of all the hook names and a description of when they execute.
- e.g. plugin.capability: Description of what it does and when it fires.
```

#### Example Usage

\`Standalone Mode:\`

\`\`\`toml
[[route_mappings]]
method = "GET"
path = "/some/path"
plugins = ["plugin.capability"]
\`\`\`

\`Library mode:\`

\`\`\`go
import (
authula "github.com/Authula/authula"
authulaconfig "github.com/Authula/authula/config"
pluginname "github.com/Authula/authula/plugins/pluginname"
)

config := authulaconfig.NewConfig(
authulaconfig.WithRouteMappings([]authulamodels.RouteMapping{
{
Method: "GET",
Path: "/some/path",
Plugins: []string{
pluginname.HookIDHookName.String(),
},
},
},
),
)
\`\`\`

**Tips**:

- Provide examples of how to use hooks in both modes
- Document when each hook fires in the lifecycle (before/after create, after delete, etc.)
- If there are many hooks, group them logically based on their dependency or lifecycle stage

---

### 7. Security Recommendations (Optional)

Include any security best practices or important notes related to the plugin, data handling, or other security considerations.

- Explicitly state anything required for API endpoints
- Note any sensitive data handling, reliance on services from the service registry or anything else that users should be aware of when using the plugin.
- Recommend best practices for securing access to the plugin's features

---

## Documentation Checklist

Before considering plugin documentation complete, verify:

- [ ] **Overview section** exists and explains features clearly without implementation details
- [ ] **Configuration section** shows both Standalone (TOML) and Library (Go) modes
- [ ] **API Reference** is a complete table of all HTTP endpoints (GET, POST, PATCH, PUT, DELETE)
- [ ] **Database Schema** documents all tables with fields, types, keys, and descriptions
- [ ] **Plugin Capabilities** explains capabilities and hooks with code examples
- [ ] All code examples are syntactically correct and directly copyable
- [ ] Migrations note is included: "Migrations are automatically handled when the plugin is initialized"
- [ ] MDX frontmatter includes `title` and `description` meta fields

---
