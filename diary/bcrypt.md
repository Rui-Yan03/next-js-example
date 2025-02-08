I encounted a import issue when i tried to create database.

This libary is bcrypt which need native bindings.

Native bindings is connection between js and low-level, platform-specific code. Native bindings ensure high performance which is a demand for bcrypt libary.

I command `pnpm rebuild bcrypt` and it's done.