# Why framing matters

The model is rarely the problem. The question is.

Two stories for you. One is a piece of research the whole field framed wrong until one person reframed it. The other is a product that hit every technical metric and still failed, until the team changed the question instead of the model. Neither turned on a better model. Both turned on a better question.

## FlashAttention: the same answer, a different question

For years the field treated fast attention as a math problem. Attention is O(N²): every token attends to every other token, so the obvious move was to do less math. Sparse attention, approximate attention, clever schemes to skip pairs. Many of these had better theoretical complexity than brute force. On real GPUs they ran slower.

Tri Dao asked a different question. Not "how do we do less math," but "what is actually slow." The answer was memory. A GPU spends most of attention shuttling the N×N matrix between slow high-bandwidth memory and fast on-chip cache, and that data movement, not the arithmetic, is the bottleneck. So FlashAttention stopped optimizing FLOPs and started optimizing memory access: tile the computation to fit in cache, compute softmax incrementally, recompute instead of store. The result was exact attention, not an approximation, three to ten times faster, and it is the reason context windows went from two thousand tokens to a million.

He didn't approximate anything. The answer was the same exact attention everyone else was computing; what changed was how it got computed. He tiled the matrix so it stayed in fast memory, borrowing a decades-old trick from high-performance computing, and used an obscure online-softmax result from a 2018 NVIDIA paper to make the tiling work. By reframing the problem away from approximation and into data-movement problem, he created a 3X to 10X improvement in attention. Great example of thinking differently about a problem 

## JP Morgan Chase: the same model, a different question

JP Morgan Chase built an AI system to help people understand privacy policies. The build was impressive: finely tuned models, a clean interface, a hierarchy of a hundred models, infrastructure upgraded just to deploy it. Accuracy was high. Retrieval quality was high. They hit every technical milestone. Then they launched, and to quote their former Head of AI Innovation, the response was "crickets." Nobody used it.

The model worked exactly as built. The assumption underneath it did not. The team had decided users wanted to chat with privacy policies, and built every metric around that assumption: accuracy, retrieval quality, faithfulness. The one metric they never had was whether anyone completed a decision with the tool. Nobody did.

So they changed the question, not the model. Users didn't need answers about a privacy policy. They needed help deciding whether to accept one. Same accuracy, different shape. The team put the system where the decision was actually being made, showed users why it was flagging what it flagged, and kept a human in the loop on the high-stakes calls. The output went from "this policy is risky" to "be concerned about this policy, because this segment says they can sell your data forever to third parties." People used it. The model never changed. The framing did. The bill for getting there was about a year of rebuilding.

## How bad framing shows up

Stand the two stories side by side and the shape is the same. The technology worked. The team's model of the problem decided the outcome. Bad framing is not a model that underperforms. It is a model that performs exactly as built, pointed at the wrong question, and it stays invisible because nothing about it looks broken while it is happening. JP Morgan's dashboards were green the whole time.

It shows up two ways. The first is a frame that was wrong from the start and nobody questioned: the field chasing FLOPs, a team assuming users wanted a chatbot. The second is a frame that was right at launch and quietly stopped being right, when the data shifts or the benchmark and the users drift apart and nobody reframes. This course is about catching both, ideally before the year of rebuilding.

These two stories are not cherry-picked. You will see the same pattern in the 200-plus case studies behind the course: real AI projects at companies like Uber, LinkedIn, Pinterest, Spotify, DoorDash, Instacart, Stripe, Netflix, Shopify, Klarna, OpenAI, and Anthropic. While the companies and products differ, the same framing questions decide whether the project works.

## Different from product framing

Most courses on framing AI projects are product management courses adapted for AI. They teach how to write the first frame: the PRD, the user research, the success metrics, the stakeholder alignment. That work is necessary, and this course does not replace it.

What a product course will not teach you is that the bottleneck for attention is memory bandwidth, or that an accurate privacy-policy chatbot can hit every metric and still be the wrong product. Those are framing decisions about the technical and human system around the model, and they are where AI projects are won or lost. A product course teaches you to write a clear PRD for a chatbot. It will not teach you why the chatbot was the wrong thing to build.

## Different from system design

Product framing sits upstream of this course. ML system design sits downstream. A system design course teaches you how to build and serve the model once you know what you are building. That work is necessary, and this course does not replace it. It just doesn't tell you what to build, or what to do when the first version doesn't work.

With system design the frame stays fixed: the problem shape, the atomic unit, the autonomy level, the metric you chose. All of it is assumed settled the day the design is done. AI projects don't work that way. The first design is a hypothesis, and it is often wrong. This course treats it as experimental from the start and gives you a systematic way to handle that: diagnose what is actually breaking, then decide whether to persist, pivot, or stop.

## Applies generally

The two stories are about as far apart as AI gets. One is a CUDA kernel with no users; the other is a customer product that was nothing but users. The framing question carried across both anyway: what is this actually for, and what is the real constraint. Framing is universal across all of AI whether it's traditional ML, GenAI, or agents. 

The AI tools may change every year, the process for building successful AI projects doesn't change. 

[See how the strategies change per class →](/framework#across-ml-genai-and-agents)

[Walk through the framework →](/framework)
