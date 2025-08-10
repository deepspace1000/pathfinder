# pathfinder

Demo change

## Development

### Prerequisites
* [nvm](https://github.com/nvm-sh/nvm)

### Setup

```shell
./setup.sh
```

#### Frontend

In IntelliJ, install the prettier plugin and select the installed prettier dependency to format js, jsx, ts and tsx files.

Copy the file [.env.example](/frontend/.env.example) to [.env](/frontend/) and replace the variables with the keys.

Start the dev environment:
```shell
# if necessary
cd frontend 
yarn dev
```

Format:

```shell
yarn format
```

Lint:

```shell
yarn lint
```