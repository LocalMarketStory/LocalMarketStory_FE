import { useState, useEffect } from "react";
import { OpenAIApi, Configuration } from "openai";
import useStore from "../pages/store";

const GptPage = () => {
  const list = useStore((state) => state.list);
  const [gptResult, setGptResult] = useState(""); // GPT 결과를 저장할 state

  useEffect(() => {
    // useStore의 list에 변화가 있을 때마다 GPT 호출
    if (list.length > 0) {
      // GPT 호출 함수
      const fetchGptResult = async () => {
        const KEY = import.meta.env.VITE_OPENAI_API_KEY;
        const configuration = new Configuration({
          apiKey: KEY,
        });
        const openai = new OpenAIApi(configuration);

        try {
          const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: `여행 경로 추천: ${list.join(", ")}`,
            temperature: 0.5,
            max_tokens: 1000,
          });

          // 결과를 state에 저장
          setGptResult(result.data.choices[0].text);
        } catch (error) {
          console.error("Error:", error);
        }
      };
      // GPT 호출 함수 실행
      fetchGptResult();
    }
  }, [list]);
  return (
    <div>
      <h2>GPT Result</h2>
      <p>{gptResult}</p>
    </div>
  );
};

export default GptPage;
