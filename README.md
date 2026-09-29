# BrowserWorker-TestMarketplace

Test fixture marketplace for BrowserWorker (layout per design.md §18).

Add in the extension (Settings → enable "Allow custom marketplace" → Marketplace → Add marketplace):

    Friczh/BrowserWorker-TestMarketplace@main

Hashes in `info.json` are SHA-256 of the files under `versions/`. Regenerate them if you edit any file:

    sha256sum scripts/*/versions/* submodules/*/versions/*
