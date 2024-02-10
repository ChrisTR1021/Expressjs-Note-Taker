const fs = require("fs");
const express = require("express");
const path = require("path");
const cuid = require("cuid");

//Json file and sets noteData

const noteData = require("./db/db.json");
const PORT = process.env.PORT || 3001;

