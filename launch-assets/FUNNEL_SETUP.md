# ALLEIN Minimum Viable Lead Funnel

## Recommended launch stack

- **Website:** existing static site moving to `alleinfitness.com`
- **Email list and automation:** Kit Newsletter plan
- **Coaching application:** Tally
- **Lead magnet:** `ALLEIN_Everyday_Athlete_Capability_Guide.pdf`

This stack keeps the first launch lean. Kit's current free Newsletter plan supports one basic visual automation with one email sequence, which is enough for the five-email Self-Check nurture sequence. Tally can handle the coaching application without building a custom backend.

## Funnel map

1. Visitor lands on `alleinfitness.com`.
2. Visitor completes the six-question Capability Self-Check.
3. The website shows the visitor's overall score and current priority.
4. Visitor selects **Send Me the Full Guide**.
5. A Kit form captures first name and email and clearly states what they will receive.
6. Kit immediately sends Email 1 with the PDF guide link.
7. Kit sends Emails 2-5 over the next eight days.
8. Coaching invitations link to the Tally application.
9. Michael reviews qualified applications and personally follows up.

## Kit build specification

### Account settings

- Creator/business name: **ALLEIN**
- Sender name: **Michael from ALLEIN**
- Sender email: use the monitored `michael@alleinfitness.com` address
- Physical mailing address: enter the legitimate business mailing address required for marketing email compliance
- Default reply-to address: a monitored inbox Michael checks daily

Authenticate the sending domain using the DNS records Kit provides before sending traffic to the funnel.

### Form

Name: **Everyday Athlete Capability Guide**

Fields:

- First name - required
- Email address - required

Consent text:

> Send me the free Everyday Athlete Capability Guide and practical ALLEIN coaching emails. I can unsubscribe at any time. See the Privacy Policy.

Button:

> Send My Free Guide

Success message:

> Your guide is on the way. Check your inbox for an email from Michael at ALLEIN. If it does not arrive within a few minutes, check Promotions or Spam and add the sender to your contacts.

Recommended subscriber tag or source label:

- `lead-magnet-capability-self-check`

### Automation

Trigger:

- Subscriber joins the **Everyday Athlete Capability Guide** form

Action:

- Add the subscriber to **Everyday Athlete Capability Sequence**

Sequence timing:

- Email 1: immediately
- Email 2: two days after Email 1
- Email 3: two days after Email 2
- Email 4: two days after Email 3
- Email 5: two days after Email 4

### Download URL

After the website is deployed, the guide will be available at:

`https://alleinfitness.com/downloads/ALLEIN_Everyday_Athlete_Capability_Guide.pdf`

## Tally coaching application specification

Form name: **Apply for ALLEIN Founding Coaching**

Intro:

> ALLEIN's 12-week Founding Coaching Program is designed for active adults who want to become stronger, more athletic, and more capable for life. This short application helps Michael understand your goals and determine whether the program is a good fit. Applying does not commit you to purchasing coaching.

Fields:

1. First and last name - required
2. Email address - required
3. Phone number - optional
4. Preferred way to hear back - email / text / phone
5. What would you most like your body to be able to do better 12 weeks from now? - required, long answer
6. Which qualities matter most right now? - movement / strength / balance / coordination / power / recovery / not sure
7. What are you currently doing for exercise or physical activity? - required, long answer
8. What has made it difficult to make the progress you want? - required, long answer
9. Where will you usually train? - home / regular gym / both / not sure
10. What equipment do you have access to? - optional, long answer
11. Is there anything Michael should know before discussing exercise options with you? - optional, long answer; include a note not to submit highly sensitive medical information
12. How ready are you to follow an individualized plan for 12 weeks? - scale of 1-10
13. The founding program is $1,200 upfront or three payments of $400. If the program is a strong fit, are you prepared to make that investment? - yes / possibly, I would like to discuss it / not right now
14. How did you hear about ALLEIN? - Instagram / Facebook / Substack / search / friend or referral / other
15. Marketing email consent - unchecked checkbox
16. Optional SMS consent - separate unchecked checkbox, shown only when a phone number is entered

Submit button:

> Submit My Application

Thank-you message:

> Thank you. Michael will personally review your application and follow up using your preferred contact method. In the meantime, keep an eye on your inbox for ALLEIN training insights.

Notifications:

- Send a new-submission notification to Michael.
- Connect responses to a dedicated Google Sheet as a simple launch-stage lead tracker.
- Do not automatically add applicants to marketing email unless they checked the marketing consent box.

## Website connection values

When the two hosted forms exist, add these environment values before building the site:

```text
VITE_GUIDE_FORM_URL=https://allein.kit.com/b41a314882
VITE_APPLICATION_URL=https://tally.so/r/dWeQJz
```

The website retains an email fallback until these values are present, so local development does not break.

## Tracking parameters

Use the same landing page with source-specific links:

- Instagram: `https://alleinfitness.com/?utm_source=instagram&utm_medium=organic&utm_campaign=capability_self_check`
- Facebook: `https://alleinfitness.com/?utm_source=facebook&utm_medium=organic&utm_campaign=capability_self_check`
- Substack: `https://alleinfitness.com/?utm_source=substack&utm_medium=organic&utm_campaign=capability_self_check`
- Direct outreach: `https://alleinfitness.com/?utm_source=direct_outreach&utm_medium=email&utm_campaign=capability_self_check`

Do not add advertising pixels until the privacy disclosures and consent approach have been updated for the exact trackers in use.

## Launch test

Complete this test before publishing the funnel publicly:

1. Submit the Kit form with a test email.
2. Confirm the subscriber and source appear in Kit.
3. Confirm Email 1 arrives and the PDF opens on mobile.
4. Confirm the unsubscribe link works.
5. Confirm Emails 2-5 have the correct delays and application links.
6. Submit the Tally application on mobile and desktop.
7. Confirm Michael receives the application notification.
8. Confirm the lead tracker receives the submission.
9. Confirm phone and marketing consent are stored separately.
10. Delete or clearly label all test records before launch reporting begins.
