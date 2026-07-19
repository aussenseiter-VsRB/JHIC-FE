# Skills

How to extend opencode with project-specific skills for JHIC-FE.

---

## What are skills?

Skills are specialized instruction sets that opencode loads when a task matches their description. They give the agent domain-specific knowledge and workflows.

## Adding a project skill

1. Create a directory under `.agents/skills/<skill-name>/`:
   ```
   .agents/skills/
   └── jhic-scaffold/
       └── SKILL.md
   ```

2. Write the `SKILL.md` with:
   - A clear description of when to activate the skill.
   - Step-by-step instructions for the workflow.
   - References to relevant files, scripts, and conventions.

3. The skill becomes available to opencode automatically.

## Skill file structure

```markdown
# Skill Name

## When to use
- Describe the trigger conditions.
- Match against user intent, not specific commands.

## Instructions
1. Step-by-step workflow.
2. Reference files by path.
3. Include verification steps.

## References
- Link to relevant docs in `Docs/`.
- Link to existing code examples.
```

## Recommended skills for JHIC-FE

| Skill | Purpose |
|-------|---------|
| `jhic-scaffold` | Guide module/page scaffolding with post-scaffold review |
| `jhic-new-component` | Step-by-step for adding shared vs module-local components |
| `jhic-route-review` | Validate `routes.tsx` after any route changes |

## Guidelines

- Keep skills focused: one workflow per skill.
- Reference `Docs/` for conventions — don't duplicate rules in the skill.
- Test skills by running the workflow they describe.
- Skills should be composable — a skill can instruct the agent to load another skill.
