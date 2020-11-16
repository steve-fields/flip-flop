# Contributing

## Commands

### Checkout

This allows you to checkout a branch on git:

`git checkout <name_of_branch>`

If you want to create a new branch, you can add `-b`:

`git checkout -b <name_of_branch>`

### Add

To add changes to be staged for a commit, you can use: 

`git add <file>` 

If you want to add all changed files: 

`git add .`

### Commit

To create a commit:

`git commit -m "<commit_message>"`

### Push

To push changes:

`git push`

If this is a new branch that hasn't been pushed to:

`git push -u origin <name_of_branch>`

## Workflow

1. Create a new branch
2. Make your changes (you can also create a branch after making changes)
3. Add your changes to be staged
4. Commit your changes
5. Push your changes to remote
6. Create a pull request with your changes, link the issue if there is one created for it
7. Get changes approved and merge

