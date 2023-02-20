## Beabloo API error issue

Beabloo doesn't seem to deal with creating multiple messages at once. 

The Signtouch CMS creates houses by creating 3+ messages concurrently. Use this tool to create any number of messages concurrently. 

---

### How to use

Open the `src/credentials.ts` file and enter your beabloo CMS credentials. 

Open the `src/index.ts` file and change the `BEABLOO_CHANNEL` variable to be the ID of a valid Beabloo Channel. 

In the `src/index.ts` file you can change the `messagesToCreate` variable to any number to create x number of messages.

in your terminal run `npm run dev` to run the program.

---

We find that if you run the program with 5 "messagesToCreate" or more will probably cause an "internal server error". 
