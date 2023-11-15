import React, { useState, useEffect } from "react";
import { OpenAIApi, Configuration } from "openai";
import useStore from "../stores/store";

const GptPage = () => {
  const list = useStore((state) => state.list);
  const [gptResult, setGptResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [plan1, setPlan1] = useState("");
  const [plan2, setPlan2] = useState("");

  useEffect(() => {
    if (list.length > 0) {
      const fetchGptResult = async () => {
        const KEY = import.meta.env.VITE_OPENAI_API_KEY;
        const configuration = new Configuration({
          apiKey: KEY,
        });
        const openai = new OpenAIApi(configuration);

        const prompt =
          `${list.join(", ")}` +
          "를 활용하여 대구여행 경로를 추천받고 싶다. 다음 조건에 맞게 추천해줘 1. 반드시 list의 여행지를 모두 포함할 것 2. 출력형식은 다음을 반드시 따를 것. 3. 여행지는 4개를 넘지 않을 것. 4. 각 여행지의 최적의 루트를 제공할 것. 5. 세부 시간 계획까지 모두 작성해줄 것 6. 1박 2일 / 2박 3일 두 가지 버전으로 작성해 줄 것. 7. 여행지 중에 서문시장 또는 칠성야시장은 반드시 포함시킬 것. 8. 같은 여행지는 일정 중에 두 번 방문하지 않을 것." +
          "출력형식 [여행계획(1박/2일)] 여행지: 여행지1(00:00~00:00) -> 여행지2(00:00~00:00) -> 여행지3(00:00~00:00) -> 여행지4(00:00~00:00)";

        try {
          setLoading(true);
          const result = await openai.createCompletion({
            model: "text-davinci-003",
            prompt: prompt,
            temperature: 0.5,
            max_tokens: 1000,
          });

          setGptResult(result.data.choices[0].text);
        } catch (error) {
          console.error("에러:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchGptResult();
    }
  }, [list]);

  useEffect(() => {
    const parseResults = () => {
      const marker = "[여행계획(2박/3일)]";
      const markerIndex = gptResult.indexOf(marker);

      if (markerIndex !== -1) {
        setPlan1(gptResult.slice(0, markerIndex + marker.length));
        setPlan2(gptResult.slice(markerIndex + marker.length).trim());
      }
    };

    parseResults();
  }, [gptResult]);

  return (
    <div>
      <h2>Trip Plan</h2>
      <div>
        <div>
          <h3>Plan 1</h3>
          <p>{plan1.replace("[여행계획(2박/3일)]","").replace("[여행계획(1박/2일)]","")}</p>
        </div>
        <div>
          <h3>Plan 2</h3>
          <p>{plan2}</p>
        </div>
      </div>
      <button onClick={() => setLoading(true)}>
        {loading ? "생성 중..." : "생성"}
      </button>
    </div>
  );
};

export default GptPage;