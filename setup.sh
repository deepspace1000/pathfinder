#!/bin/bash

handle_error() {
  local exit_code="$?"
  exit "$exit_code"
}

trap 'handle_error' ERR

echo '
            ___           ___           ___           ___           ___                       ___           ___           ___           ___
           /\  \         /\  \         /\  \         /\__\         /\  \          ___        /\__\         /\  \         /\  \         /\  \
          /::\  \       /::\  \        \:\  \       /:/  /        /::\  \        /\  \      /::|  |       /::\  \       /::\  \       /::\  \
         /:/\:\  \     /:/\:\  \        \:\  \     /:/__/        /:/\:\  \       \:\  \    /:|:|  |      /:/\:\  \     /:/\:\  \     /:/\:\  \
        /::\~\:\  \   /::\~\:\  \       /::\  \   /::\  \ ___   /::\~\:\  \      /::\__\  /:/|:|  |__   /:/  \:\__\   /::\~\:\  \   /::\~\:\  \
       /:/\:\ \:\__\ /:/\:\ \:\__\     /:/\:\__\ /:/\:\  /\__\ /:/\:\ \:\__\  __/:/\/__/ /:/ |:| /\__\ /:/__/ \:|__| /:/\:\ \:\__\ /:/\:\ \:\__\
       \/__\:\/:/  / \/__\:\/:/  /    /:/  \/__/ \/__\:\/:/  / \/__\:\ \/__/ /\/:/  /    \/__|:|/:/  / \:\  \ /:/  / \:\~\:\ \/__/ \/_|::\/:/  /
            \::/  /       \::/  /    /:/  /           \::/  /       \:\__\   \::/__/         |:/:/  /   \:\  /:/  /   \:\ \:\__\      |:|::/  /
             \/__/        /:/  /     \/__/            /:/  /         \/__/    \:\__\         |::/  /     \:\/:/  /     \:\ \/__/      |:|\/__/
                         /:/  /                      /:/  /                    \/__/         /:/  /       \::/__/       \:\__\        |:|  |
                         \/__/                       \/__/                                   \/__/         ~~            \/__/         \|__|
'

echo "Hi there! This script will set up your development environment for pathfinder."
read -p "ℹ️ Press Enter to continue..."
echo

pushd ./frontend > /dev/null || exit

echo "⚙️ Installing Node.js"
source "$HOME/.nvm/nvm.sh"
nvm install
echo

echo "⚙️ Enabling Corepack (for Yarn)"
corepack enable
echo

echo "⚙️ Installing Yarn dependencies"
yarn install
echo

popd > /dev/null || exit

echo "🎉 Setup complete, happy hacking!"
echo
