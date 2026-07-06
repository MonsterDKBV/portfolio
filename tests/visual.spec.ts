import { test, expect } from '@playwright/test'
import path from 'path'

const VISUAL_DIR = path.join(__dirname, '..', 'visual-regression')

test.describe('Visual Regression Tests', () => {
  test('Full page screenshot - Next.js version', async ({ page }, testInfo) => {
    await page.goto('http://localhost:3000')

    // Wait for fonts and animations to load
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(1000)

    const viewport = testInfo.project.name
    const screenshotPath = path.join(VISUAL_DIR, 'next', `fullpage-${viewport}.png`)

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    })

    console.log(`Screenshot saved: ${screenshotPath}`)
  })

  test('Hero section screenshot', async ({ page }, testInfo) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')
    await page.waitForTimeout(500)

    const viewport = testInfo.project.name
    const screenshotPath = path.join(VISUAL_DIR, 'next', `hero-${viewport}.png`)

    // Screenshot only the viewport (hero section visible)
    await page.screenshot({
      path: screenshotPath,
      fullPage: false,
    })
  })

  test('Sections screenshots', async ({ page }, testInfo) => {
    await page.goto('http://localhost:3000')
    await page.waitForLoadState('networkidle')

    const viewport = testInfo.project.name

    // Screenshot each section
    const sections = ['work', 'expertise', 'ai', 'about', 'contact']

    for (const section of sections) {
      await page.goto(`http://localhost:3000#${section}`)
      await page.waitForTimeout(300)

      const screenshotPath = path.join(VISUAL_DIR, 'next', `${section}-${viewport}.png`)
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
      })
    }
  })
})

test.describe('Original HTML Screenshots', () => {
  test('Capture original HTML', async ({ page }, testInfo) => {
    // Open local HTML file
    const htmlPath = path.join(__dirname, '..', 'Archive', 'main.html')
    await page.goto(`file://${htmlPath}`)

    await page.waitForLoadState('domcontentloaded')
    await page.waitForTimeout(1500) // Wait for animations

    const viewport = testInfo.project.name
    const screenshotPath = path.join(VISUAL_DIR, 'original', `fullpage-${viewport}.png`)

    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    })

    console.log(`Original screenshot saved: ${screenshotPath}`)
  })
})
