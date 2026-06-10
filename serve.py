#!/usr/bin/env python3
"""Local preview server for dist/ (absolute chdir; no getcwd reliance)."""
import http.server, socketserver, functools, pathlib

DIST = str(pathlib.Path(__file__).resolve().parent / "dist")
PORT = 4321
# Resolve the directory per-request (no chdir) so `python3 build.py` can wipe
# and recreate dist/ while this server keeps running — no restart needed.
Handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=DIST)
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(("127.0.0.1", PORT), Handler) as httpd:
    print(f"Serving {DIST} at http://127.0.0.1:{PORT}")
    httpd.serve_forever()
