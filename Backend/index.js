const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv=require('dotenv')
dotenv.config();
const cors = require("cors");
const bodyParser = require("body-parser");