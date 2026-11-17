import test from "node:test";
import assert from "node:assert/strict";
import {
  LATEST_NEWS,
  PORTFOLIO_ITEMS,
  getPortfolioItemBySlug,
  getPortfolioItemsByCategory,
} from "./portfolio-data";

test("Every Latest News item links to a valid Medium-style article slug", () => {
  assert.ok(LATEST_NEWS.length >= 3);
  for (const news of LATEST_NEWS) {
    const target = getPortfolioItemBySlug(news.articleSlug);
    assert.ok(target, `Missing article for news slug: ${news.articleSlug}`);
  }
});

test("Every portfolio card has a concise summary, dedicated chatbot context, and a complete Medium article", () => {
  assert.ok(PORTFOLIO_ITEMS.length >= 6);
  for (const item of PORTFOLIO_ITEMS) {
    assert.ok(item.slug.length > 0);
    assert.ok(item.summary.length > 20 && item.summary.length < 300);
    assert.ok(item.aiContext.length > 20);
    assert.ok(item.suggestedQuestions.length >= 2);
    assert.ok(item.article.leadParagraph.length > 30);
    assert.ok(item.article.sections.length >= 2);
  }
});

test("No Arabic characters exist anywhere in portfolio data", () => {
  const serialized = JSON.stringify({ LATEST_NEWS, PORTFOLIO_ITEMS });
  const arabicRegex = /[\u0600-\u06FF]/;
  assert.equal(arabicRegex.test(serialized), false, "Found Arabic characters in portfolio data");
});

test("Category filter helper returns expected items", () => {
  assert.equal(getPortfolioItemsByCategory("Production Project").length, 3);
  assert.equal(getPortfolioItemsByCategory("ML Model & Weights").length, 2);
  assert.equal(getPortfolioItemsByCategory("Research Paper").length, 1);
  assert.equal(getPortfolioItemsByCategory("Prototype & Open Source").length, 1);
});
