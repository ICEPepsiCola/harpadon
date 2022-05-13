harpadon
=================

for markdown operation

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g harpadon
$ harpadon COMMAND
running command...
$ harpadon (--version)
harpadon/0.0.1 darwin-x64 node-v14.17.0
$ harpadon --help [COMMAND]
USAGE
  $ harpadon COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`harpadon help [COMMAND]`](#harpadon-help-command)
* [`harpadon plugins`](#harpadon-plugins)
* [`harpadon plugins:install PLUGIN...`](#harpadon-pluginsinstall-plugin)
* [`harpadon plugins:inspect PLUGIN...`](#harpadon-pluginsinspect-plugin)
* [`harpadon plugins:install PLUGIN...`](#harpadon-pluginsinstall-plugin-1)
* [`harpadon plugins:link PLUGIN`](#harpadon-pluginslink-plugin)
* [`harpadon plugins:uninstall PLUGIN...`](#harpadon-pluginsuninstall-plugin)
* [`harpadon plugins:uninstall PLUGIN...`](#harpadon-pluginsuninstall-plugin-1)
* [`harpadon plugins:uninstall PLUGIN...`](#harpadon-pluginsuninstall-plugin-2)
* [`harpadon plugins update`](#harpadon-plugins-update)
* [`harpadon table [FILE]`](#harpadon-table-file)

## `harpadon help [COMMAND]`

Display help for harpadon.

```
USAGE
  $ harpadon help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for harpadon.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `harpadon plugins`

List installed plugins.

```
USAGE
  $ harpadon plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ harpadon plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `harpadon plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ harpadon plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ harpadon plugins add

EXAMPLES
  $ harpadon plugins:install myplugin 

  $ harpadon plugins:install https://github.com/someuser/someplugin

  $ harpadon plugins:install someuser/someplugin
```

## `harpadon plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ harpadon plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ harpadon plugins:inspect myplugin
```

## `harpadon plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ harpadon plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ harpadon plugins add

EXAMPLES
  $ harpadon plugins:install myplugin 

  $ harpadon plugins:install https://github.com/someuser/someplugin

  $ harpadon plugins:install someuser/someplugin
```

## `harpadon plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ harpadon plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ harpadon plugins:link myplugin
```

## `harpadon plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ harpadon plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ harpadon plugins unlink
  $ harpadon plugins remove
```

## `harpadon plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ harpadon plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ harpadon plugins unlink
  $ harpadon plugins remove
```

## `harpadon plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ harpadon plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ harpadon plugins unlink
  $ harpadon plugins remove
```

## `harpadon plugins update`

Update installed plugins.

```
USAGE
  $ harpadon plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

## `harpadon table [FILE]`

describe the command here

```
USAGE
  $ harpadon table [FILE] [-n <value>] [-f]

FLAGS
  -f, --force
  -n, --name=<value>  name to print

DESCRIPTION
  describe the command here

EXAMPLES
  $ harpadon table
```

_See code: [dist/commands/table.ts](https://github.com/ICEPepsiCola/harpadon/blob/v0.0.1/dist/commands/table.ts)_
<!-- commandsstop -->
