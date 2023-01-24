FROM node:18-alpine

WORKDIR /bff

# ここからじゃインストールできない？？（ローカルと同期）
# RUN [ "npm", "i", "express" ]
# RUN [ "npm", "i", "ts-node", "-D" ]
# RUN [ "npm", "i", "typescript", "-D" ]
# RUN [ "npm", "i", "@types/express", "-D" ]
# RUN [ "npm", "i", "@types/node", "-D" ]

COPY . .

CMD ["yarn", "start"]
