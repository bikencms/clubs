module.exports = {
  apps : [
    {
      "name": "clubs",
      "script": "npm",
      "args" : "run dev"
    },
    {
      "name": "clubs_api",
      "script": "npm",
      "cwd": "./proxy",
      "args" : "run dev"
    }
  ]
};
