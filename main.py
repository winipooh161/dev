import requests
import sys  # добавляем импорт для работы с аргументами командной строки

def get_assistant_response(user_message):
    prompt = {
        "modelUri": "gpt://b1g6gkj6ak3a0r7psf6b/yandexgpt-lite",
        "completionOptions": {
            "stream": False,
            "temperature": 0.6,
            "maxTokens": "2000"
        },
        "messages": [
          
             {
        "role": "system",
        "text": "Ты умный ассистент"
      },
      {
        "role": "user", 
        "text": user_message
      },
        ]
    }
    url = "https://llm.api.cloud.yandex.net/foundationModels/v1/completion"
  
    headers = {
        'Authorization': 'Api-Key AQVN2RvfN5os8VmFhCoYbvfx3IkPRIwAPdFPj2OY', 
        'Content-Type': 'application/json' 
    }
    response = requests.post(url, headers=headers, json=prompt)

    if response.status_code == 200:
        data = response.json()
        assistant_response = data["result"]["alternatives"][0]["message"]["text"]
        print("Assistant response:", assistant_response)  # добавляем вывод текста ответа
        return assistant_response
    else:
        return "Ошибка при получении ответа от ассистента"

if __name__ == "__main__":
    user_message = sys.argv[1]  # Получаем сообщение пользователя из аргументов командной строки
    assistant_response = get_assistant_response(user_message)
    print(assistant_response)
