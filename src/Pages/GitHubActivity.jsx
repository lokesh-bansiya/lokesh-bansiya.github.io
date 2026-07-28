import { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import {
  FiArrowUpRight,
  FiBookOpen,
  FiGitBranch,
  FiGithub,
  FiGitPullRequest,
  FiStar,
  FiUsers,
} from "react-icons/fi";

const username = "lokesh-bansiya";

export const GitHubActivity = () => {
  const [profile, setProfile] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    Promise.all([
      fetch(`https://api.github.com/users/${username}`, {
        signal: controller.signal,
      }),
      fetch(
        `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`,
        { signal: controller.signal },
      ),
    ])
      .then(async ([profileResponse, repositoriesResponse]) => {
        if (!profileResponse.ok || !repositoriesResponse.ok) {
          throw new Error("GitHub API request failed");
        }

        const [profileData, repositoryData] = await Promise.all([
          profileResponse.json(),
          repositoriesResponse.json(),
        ]);

        setProfile(profileData);
        setRepositories(repositoryData.filter((repository) => !repository.fork));
      })
      .catch((error) => {
        if (error.name !== "AbortError") setApiError(true);
      });

    return () => controller.abort();
  }, []);

  const totalStars = repositories.reduce(
    (total, repository) => total + repository.stargazers_count,
    0,
  );
  const totalForks = repositories.reduce(
    (total, repository) => total + repository.forks_count,
    0,
  );
  const languageCounts = repositories.reduce((languages, repository) => {
    if (repository.language) {
      languages[repository.language] = (languages[repository.language] || 0) + 1;
    }
    return languages;
  }, {});
  const languageTotal = Object.values(languageCounts).reduce(
    (total, count) => total + count,
    0,
  );
  const languages = Object.entries(languageCounts)
    .sort(([, countA], [, countB]) => countB - countA)
    .slice(0, 5)
    .map(([name, count]) => ({
      name,
      count,
      percentage: Math.round((count / languageTotal) * 100),
    }));

  const metrics = [
    {
      icon: <FiBookOpen />,
      value: profile?.public_repos ?? "—",
      label: "Public repositories",
    },
    {
      icon: <FiUsers />,
      value: profile?.followers ?? "—",
      label: "GitHub followers",
    },
    {
      icon: <FiGitPullRequest />,
      value: "4+ yrs",
      label: "Shipping production code",
    },
  ];

  return (
    <section id="github" className="section github-section">
      <div className="section-shell">
        <div className="section-heading github-heading">
          <div>
            <span className="section-index">04 / Open-source activity</span>
            <h2>
              Consistency you can
              <br />
              see in the code.
            </h2>
          </div>
          <div className="github-intro">
            <p>
              A live view of my public development activity, repositories, and
              contribution rhythm on GitHub.
            </p>
            <a
              className="text-link"
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub /> View GitHub profile <FiArrowUpRight />
            </a>
          </div>
        </div>

        <div className="github-metrics">
          {metrics.map((metric) => (
            <article key={metric.label}>
              <span>{metric.icon}</span>
              <strong>{metric.value}</strong>
              <p>{metric.label}</p>
            </article>
          ))}
          <a
            className="github-profile-card"
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://github.com/${username}.png`}
              alt="Lokesh Patidar on GitHub"
            />
            <div>
              <span>GitHub profile</span>
              <strong>@{username}</strong>
            </div>
            <FiArrowUpRight />
          </a>
        </div>

        <div className="contribution-panel">
          <div className="panel-topline">
            <div>
              <span className="live-dot" />
              Live contribution calendar
            </div>
            <span>Last 12 months</span>
          </div>
          <div className="calendar-scroll">
            <GitHubCalendar
              username={username}
              blockSize={13}
              blockMargin={4}
              fontSize={12}
              colorScheme="light"
              theme={{
                light: ["#e5e9e4", "#d8f1a9", "#a9dc65", "#6ea83c", "#244d3e"],
              }}
            />
          </div>
        </div>

        <div className="github-stat-cards">
          <article className="repository-stats">
            <div className="stat-card-heading">
              <div>
                <span>Live GitHub data</span>
                <h3>Repository statistics</h3>
              </div>
              <FiGithub />
            </div>
            <div className="repository-stat-grid">
              <div>
                <FiBookOpen />
                <strong>{repositories.length || "—"}</strong>
                <span>Original repositories</span>
              </div>
              <div>
                <FiStar />
                <strong>{repositories.length ? totalStars : "—"}</strong>
                <span>Stars earned</span>
              </div>
              <div>
                <FiGitBranch />
                <strong>{repositories.length ? totalForks : "—"}</strong>
                <span>Repository forks</span>
              </div>
            </div>
            {apiError && (
              <p className="github-api-note">
                GitHub’s public API is temporarily rate-limited. Visit the
                profile to see the latest totals.
              </p>
            )}
          </article>

          <article className="language-card">
            <div className="stat-card-heading">
              <div>
                <span>Across public repositories</span>
                <h3>Primary languages</h3>
              </div>
              <span className="language-total">{languageTotal || "—"} repos</span>
            </div>
            <div className="language-list">
              {languages.length ? (
                languages.map((language, index) => (
                  <div className="language-row" key={language.name}>
                    <div>
                      <span
                        className={`language-dot language-dot-${index + 1}`}
                      />
                      <strong>{language.name}</strong>
                      <span>{language.count} repos</span>
                    </div>
                    <div className="language-bar">
                      <span style={{ width: `${language.percentage}%` }} />
                    </div>
                    <b>{language.percentage}%</b>
                  </div>
                ))
              ) : (
                <p className="github-api-note">
                  Loading language data from GitHub…
                </p>
              )}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};
