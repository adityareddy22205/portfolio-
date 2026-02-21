import React from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import Particle from "../Particle";
import "./EnterpriseMLM.css";

const FEATURES = [
  {
    title: "Compensation Engine",
    body: "Configurable rules, versioned plans, real-time calculations, and audit-friendly payouts.",
  },
  {
    title: "Genealogy & Rank",
    body: "Fast network views, rank qualification, compression support, and volume tracking at scale.",
  },
  {
    title: "Wallets & Payouts",
    body: "Multi-currency wallets, payout schedules, reconciliation exports, and payment provider hooks.",
  },
  {
    title: "Enterprise Security",
    body: "Role-based access control, SSO-ready auth patterns, and immutable audit logs.",
  },
  {
    title: "Operations Console",
    body: "Member lifecycle, disputes/adjustments, promotions, and controlled plan rollouts.",
  },
  {
    title: "Reporting & Integrations",
    body: "Dashboards, CSV exports, webhooks, and integrations with e-commerce and CRM stacks.",
  },
];

const PRICING = [
  {
    name: "Starter",
    price: "From $499/mo",
    points: ["Single market", "Standard plan templates", "Basic reports", "Email support"],
  },
  {
    name: "Growth",
    price: "From $1,499/mo",
    points: ["Multi-market", "Advanced commissions", "Payout exports", "Priority support"],
  },
  {
    name: "Enterprise",
    price: "Custom",
    points: ["SSO + RBAC", "Custom integrations", "SLA + audit logs", "Dedicated onboarding"],
  },
];

function EnterpriseMLM() {
  return (
    <Container fluid className="enterprise-section">
      <Particle />
      <Container>
        <Row className="enterprise-hero" style={{ alignItems: "center" }}>
          <Col md={7}>
            <span className="enterprise-badge">Enterprise Edition</span>
            <h1 className="enterprise-title">
              Multi-Level Marketing <strong className="purple">Platform</strong>
            </h1>
            <p className="enterprise-subtitle">
              A compliance-first back office built for scale: commissions, genealogy, ranks,
              wallets, payouts, and reporting, without sacrificing auditability or control.
            </p>
            <div className="enterprise-cta">
              <Button variant="primary" href="#pricing">
                View Pricing
              </Button>
              <Button variant="outline-light" href="#features">
                Explore Features
              </Button>
            </div>
          </Col>

          <Col md={5} style={{ marginTop: "24px" }}>
            <Card className="enterprise-card">
              <Card.Body>
                <Card.Title>What you get</Card.Title>
                <Card.Text className="enterprise-muted">
                  Enterprise-grade fundamentals packaged for modern MLM operations.
                </Card.Text>
                <ul className="enterprise-list">
                  <li>Configurable compensation plans (versioned)</li>
                  <li>High-performance genealogy and volume rollups</li>
                  <li>Payout exports and reconciliation workflow</li>
                  <li>Role-based controls and audit logs</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="enterprise-divider" />

        <h1 id="features" className="project-heading enterprise-section-title">
          Enterprise <strong className="purple">Capabilities</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {FEATURES.map((feature) => (
            <Col key={feature.title} md={4} style={{ paddingTop: "18px" }}>
              <Card className="enterprise-card">
                <Card.Body>
                  <Card.Title>{feature.title}</Card.Title>
                  <Card.Text className="enterprise-muted">{feature.body}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="enterprise-divider" />

        <Row style={{ justifyContent: "center" }}>
          <Col md={6} style={{ paddingTop: "10px" }}>
            <h2 className="project-heading" style={{ fontSize: "1.7em" }}>
              Built for <strong className="purple">Governance</strong>
            </h2>
            <p className="enterprise-muted">
              Enterprise Edition is designed to help you operate transparently across markets.
              Use plan versioning, approvals, and audit logs to support internal controls and
              external reviews.
            </p>
          </Col>
          <Col md={6} style={{ paddingTop: "10px" }}>
            <h2 className="project-heading" style={{ fontSize: "1.7em" }}>
              Designed for <strong className="purple">Scale</strong>
            </h2>
            <p className="enterprise-muted">
              Optimized for large networks and heavy calculation loads, so month-end payout runs
              don't become month-end incidents.
            </p>
          </Col>
        </Row>

        <div className="enterprise-divider" />

        <h1 id="pricing" className="project-heading enterprise-section-title">
          Pricing <strong className="purple">Plans</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {PRICING.map((tier) => (
            <Col key={tier.name} md={4} style={{ paddingTop: "18px" }}>
              <Card className="enterprise-card">
                <Card.Body>
                  <Card.Title>{tier.name}</Card.Title>
                  <Card.Text style={{ fontSize: "1.2rem", fontWeight: 600 }}>
                    {tier.price}
                  </Card.Text>
                  <ul className="enterprise-list">
                    {tier.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="enterprise-cta" style={{ marginTop: "16px" }}>
                    <Button variant="primary" href="#contact">
                      Request Demo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="enterprise-divider" />

        <h1 className="project-heading enterprise-section-title">FAQ</h1>
        <Accordion className="enterprise-faq" defaultActiveKey="0" alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Is this for a legitimate MLM business?</Accordion.Header>
            <Accordion.Body>
              This page is a product/portfolio template. If you operate an MLM program, ensure
              you comply with local laws, consumer protection rules, and advertising guidelines
              (including income/earnings disclosures).
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Do you provide the full backend?</Accordion.Header>
            <Accordion.Body>
              This React project focuses on the front-end presentation. A real Enterprise Edition
              platform typically requires backend services for identity, ledger/payouts,
              commission calculations, reporting, and integrations.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Can it integrate with payments and e-commerce?</Accordion.Header>
            <Accordion.Body>
              Yes, most deployments integrate with payment providers, ERP/CRM, and commerce stacks
              via APIs/webhooks. The exact approach depends on your existing systems.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <div className="enterprise-divider" />

        <Row id="contact" style={{ justifyContent: "center", paddingBottom: "18px" }}>
          <Col md={10} style={{ textAlign: "center" }}>
            <h1 className="project-heading" style={{ paddingTop: "10px" }}>
              Ready to ship an <strong className="purple">Enterprise</strong> back office?
            </h1>
            <p className="enterprise-muted">
              Tell me your plan type, markets, payout cadence, and integration needs, and I'll
              tailor an Enterprise Edition build plan.
            </p>
            <div className="enterprise-cta" style={{ justifyContent: "center" }}>
              <Button variant="primary" href="mailto:hello@example.com">
                Contact Sales
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default EnterpriseMLM;
