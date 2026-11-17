import { test } from "node:test";
import assert from "node:assert/strict";
import {
  LATEST_NEWS,
  PORTFOLIO_ITEMS,
  getPortfolioItemBySlug,
  getProductionProjects,
  getFrsLabItems,
  getArticlesByTopic,
} from "./portfolio-data";

test("Every Latest News item links to a valid Medium-style article slug", () => {
  assert.ok(LATEST_NEWS.length >= 3);
  for (const news of LATEST_NEWS) {
    const target = getPortfolioItemBySlug(news.articleSlug);
    assert.ok(
      target,
      `News item "${news.title}" references missing slug "${news.articleSlug}"`
    );
  }
});

test("Every portfolio card has a concise summary, dedicated chatbot context, and a complete Medium article", () => {
  assert.ok(PORTFOLIO_ITEMS.length >= 6);
  for (const item of PORTFOLIO_ITEMS) {
    assert.ok(item.summary.length > 30 && item.summary.length < 280);
    assert.ok(item.aiContext.length > 40);
    assert.ok(item.suggestedQuestions.length >= 3);
    assert.ok(item.article.leadParagraph.length > 40);
    assert.ok(item.article.sections.length >= 2);
  }
});

test("FRS LAB filter helper and Production-to-Lab cross-links work accurately", () => {
  const projects = getProductionProjects();
  assert.ok(projects.some((p) => p.slug === "saios"));
  assert.ok(projects.some((p) => p.slug === "disvibe"));

  // Check cross-links from production projects to FRS LAB
  for (const proj of projects) {
    assert.ok(proj.poweredByLab && proj.poweredByLab.length >= 1);
    for (const link of proj.poweredByLab) {
      assert.ok(getPortfolioItemBySlug(link.labSlug));
    }
  }

  // Check FRS LAB filtering and deployedIn badges
  const allLab = getFrsLabItems("All");
  const models = getFrsLabItems("Models");
  const papers = getFrsLabItems("Papers");
  const oss = getFrsLabItems("Open Source & Paper-to-Code");

  assert.equal(allLab.length, models.length + papers.length + oss.length);
  for (const labItem of allLab) {
    assert.ok(labItem.deployedIn, `FRS LAB item ${labItem.slug} should have deployedIn link`);
    assert.ok(getPortfolioItemBySlug(labItem.deployedIn.projectSlug));
  }
});

test("Article topic filtering and zero Arabic characters across all data", () => {
  const allArticles = getArticlesByTopic("All");
  const sysArticles = getArticlesByTopic("Systems & Architecture");
  const llmArticles = getArticlesByTopic("LLMs & Fine-Tuning");
  const researchArticles = getArticlesByTopic("Research Notes");

  assert.equal(
    allArticles.length,
    sysArticles.length + llmArticles.length + researchArticles.length
  );

  const arabicRegex = /[\u0600-\u06FF]/;
  const serialized = JSON.stringify({ LATEST_NEWS, PORTFOLIO_ITEMS });
  assert.equal(
    arabicRegex.test(serialized),
    false,
    "Found Arabic characters in portfolio data"
  );
});
