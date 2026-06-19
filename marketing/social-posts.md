# Social posts

Drafts for promoting the AI Problem Framing course. Not published to the site.

---

## The feedback loop that system design forgets

**Angle:** the course relates to ML system design, but loops the frame, not the model.
**Channel:** LinkedIn
**Status:** draft — 2026-06-19

> **Every ML system design guide draws a feedback loop. Almost none of them loop the right thing.**
>
> If you've prepped for an ML system design interview, you know the diagram. An offline path trains the model, an online path serves predictions, and a feedback loop sends user behavior back to retraining. It's a good diagram. I teach a version of it.
>
> Look at what that feedback loop retrains: the model weights. The frame stays frozen. The atomic unit you picked, the problem shape (classification or ranking), how much autonomy you gave the system, the metric you optimize. All of it is treated as settled the moment the design is done. The arrow only points back to training.
>
> In production that's the half that breaks.
>
> Predict churn was the wrong shape. It should have been ranking, because the team can only call 100 accounts a week. The autonomous agent should have been a three-step pipeline. The metric you optimized, AUC, climbs while the one the business feels, retention, sits flat. None of those get fixed by retraining on fresh data. They get fixed by reframing the problem.
>
> That's the loop the standard diagram can't draw. System design retrains the model. It has no feedback loop for the framing.
>
> My course is that second loop: Frame, Diagnose, Reframe. The part where you decide to persist, pivot, or stop, after the system is shipped and the metrics are green and it still isn't working.
>
> Next cohort: September 2026. https://maven.com/rajistics/ai-problem-framing

### Shorter alt (X/Twitter)

> Every ML system design diagram has a feedback loop.
>
> It retrains the model.
>
> It never retrains the frame: the problem shape, the atomic unit, the metric you chose. Those get assumed correct at design time.
>
> In production that's the half that breaks. My course is the second loop: persist, pivot, or stop.
