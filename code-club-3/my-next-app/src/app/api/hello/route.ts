import type { NextRequest } from 'next/server';

export const runtime = 'edge';

export async function handleRequest(request: NextRequest) {
  const GREETINGS_MAP: { [key: string]: string } = {
    0: "Hello and farewell!",
    1: "Ciao e arrivederci!",
    2: "Hallo en tot ziens!",
    3: "Привет и до свидания!",
    4: "안녕히 가세요!",
  };

  const randomIndex = Math.floor(Math.random() * 5);
  let responseMessage: string;

  if (request.method === "POST") {
    responseMessage = "Greetings, POST request received!";
  } else {
    responseMessage = "Greetings, non-POST request received!";
  }

  const responseBody = {
    message: responseMessage + " " + GREETINGS_MAP[randomIndex],
  };

  return new Response(JSON.stringify(responseBody), {
    headers: {
      'content-type': 'application/json; charset=UTF-8',
    },
  });
}
