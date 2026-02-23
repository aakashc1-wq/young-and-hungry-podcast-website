import "./About.css";
import logo from "../assets/young-and-hungry-logo.jpg";
import seanPhoto from "../assets/sean-young-photo.png";

const links = [
  {
    label: "Linktree",
    href: "https://linktr.ee/youngandhungryk_12",
    note: "All official links in one place",
  },
  {
    label: "Newsletter Signup",
    href: "https://uci.co1.qualtrics.com/jfe/form/SV_3TMvAyg2SEOFsI6",
    note: "Get notified about new episodes + resources",
  },
  {
    label: "Apply to Be on the Podcast",
    href: "https://uci.co1.qualtrics.com/jfe/form/SV_9BRORRbI7lWp5qu",
    note: "Share your story with our audience",
  },
  {
    label: "Share Feedback",
    href: "https://uci.co1.qualtrics.com/jfe/form/SV_02kdZ52eHqVqDj0",
    note: "Help improve the show",
  },
];

export default function About() {
  return (
    <main className="about">
      <header className="about-hero">
        <p className="kicker">Young & Hungry K–12</p>
        <h1>About the Podcast</h1>
        <img src={logo} alt="Young & Hungry logo" className="about-logo" />
        <p className="lead">
          Our project addresses the scattered nature of AI information by
          creating one central hub for parents and teachers. The main resource
          is a podcast designed for busy working adults to help prepare K–12
          students for a future with AI.
        </p>

        <div className="hero-card">
          <h2 className="hero-card-title">What you’ll find here</h2>
          <ul className="bullets">
            <li>Podcast episodes with clear takeaways and summaries.</li>
            <li>Supplemental learning resources and activities.</li>
            <li>Optional badges and certificates for progress milestones.</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section-head">
          <h2>Purpose</h2>
          <p>
            We help parents and teachers feel confident using AI as a tool—not
            a shortcut. Our focus is responsible use, practical strategies, and
            age-appropriate teaching approaches.
          </p>
        </div>

        <div className="grid-2">
          <div className="panel">
            <h3>For parents</h3>
            <p>
              Learn how to guide homework support and encourage critical
              thinking when students use AI.
            </p>
          </div>

          <div className="panel">
            <h3>For teachers</h3>
            <p>
              Classroom-ready approaches including policies, prompts, and
              discussion activities.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Creators</h2>
          <p>
            The podcast features Dr. Sean Young and youth co-hosts Melody and
            Maverick.
          </p>
        </div>

        <div className="creators">
          <article className="creator-card">
            <img src={seanPhoto} alt="Dr. Sean Young" className="avatar avatar-photo" style={{width:72,height:72,borderRadius:'999px',objectFit:'cover',objectPosition:'center top',display:'block',margin:'0 auto'}} />
            <div>
              <h3>Dr. Sean Young</h3>
              <p className="role">Host • Research + Guidance</p>
              <p>
                Brings research-informed perspective and turns complex ideas
                into practical steps for adults.
              </p>
            </div>
          </article>

          <article className="creator-card">
            <div className="avatar avatar-initials" style={{width:72,height:72,borderRadius:'999px',background:'#1a2744',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'1.1rem',margin:'0 auto'}}>M</div>
            <div>
              <h3>Melody</h3>
              <p className="role">Co-host • Student Perspective</p>
              <p>
                Represents student curiosity and real questions learners ask
                about AI.
              </p>
            </div>
          </article>

          <article className="creator-card">
            <div className="avatar avatar-initials" style={{width:72,height:72,borderRadius:'999px',background:'#2d3f6b',color:'white',display:'flex',alignItems:'center',justifyContent:'center',fontWeight:800,fontSize:'1.1rem',margin:'0 auto'}}>MV</div>
            <div>
              <h3>Maverick</h3>
              <p className="role">Co-host • Creativity</p>
              <p>
                Helps turn topics into fun activities and conversations for kids.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Connect</h2>
          <p>Visit our Linktree for all official links.</p>
        </div>

        <div className="link-grid">
          {links.map((l, i) => (
            <a
              key={i}
              className="link-card"
              href={l.href}
              target="_blank"
              rel="noreferrer"
            >
              <div className="link-title">{l.label}</div>
              <div className="link-note">{l.note}</div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
