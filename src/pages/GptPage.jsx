import { useState, useEffect } from "react";
import { OpenAIApi, Configuration } from "openai";
import useStore from "../stores/store";

const GptPage = () => {
  const list = useStore((state) => state.list);
  const [gptResult, setGptResult] = useState(""); // GPT 결과를 저장할 state
  const [loading, setLoading] = useState(false);

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

        const prompt1 =
          `${list.join(", ")}` +
          "를 활용하여 대구여행 경로를 추천받고 싶다. 다음 조건에 맞게 추천해줘 1. 반드시 list의 여행지를 모두 포함할것 2.출력형식은 다음을 반드시 따를것.3. 여행지는 5개를 넘지 않을것. 4. 각 여행지의 최적의 루트를 제공할것. 5. 세부 시간계획까지 모두 작성해줄것 6. 1박 2일/ 2박 3일 두가지 버전으로 작성해 줄것" +
          "출력형식 [여행계획(1박/2일)] 여행지: 여행지1 -> 여행지2 -> 여행지3 -> ...,일정 : 여행지1(00:00~00:00), 여행지2 ... ";

        try {
          setLoading(true); // 로딩 시작
          const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt1,
            temperature: 0.5,
            max_tokens: 1000,
          });

          setGptResult(result.data.choices[0].text);
        } catch (error) {
          console.error("Error:", error);
        } finally {
          setLoading(false); // 로딩 종료
        }
      };
      // GPT 호출 함수 실행
      fetchGptResult();
    }
  }, [list]);

  return (
    <div>
      <h2>GPT Result</h2>
      {loading ? <p>Generating...</p> : <p>{gptResult}</p>}
      <button onClick={() => setLoading(true)}>Generate</button>
    </div>
  );
};

export default GptPage;
