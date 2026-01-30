# AGENTS.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Tether is a personal finance application for tracking income, expenses, budgets, and net worth with visual insights.

## Architecture Principles

**Data Model Core Entities:**
- Transactions: Income and expense entries with categories, amounts, dates, and descriptions
- Budgets: Category-based spending limits with time periods (monthly/yearly)
- Accounts: Bank accounts, credit cards, investment accounts for net worth tracking
- Categories: Hierarchical organization of transaction types (e.g., Housing > Rent, Food > Groceries)

**Key Architecture Decisions:**
- Financial data requires precise decimal handling - never use floating point for currency calculations
- Transactions should be immutable once reconciled with account statements
- Budget periods need proper date range handling with timezone considerations
- Historical data must be preserved for trend analysis and reporting

## Development Workflow

When implementing features, consider:
- Data privacy and security are paramount - this is personal financial data
- Export/import functionality for data portability
- Multi-currency support if tracking international accounts
- Recurring transaction patterns (subscriptions, paychecks)
- Reconciliation workflow for matching bank statements

## Testing Approach

Test financial calculations with edge cases:
- Boundary dates (month-end, year-end, leap years)
- Decimal precision and rounding
- Negative balances and transfers between accounts
- Budget rollover and carryforward logic
