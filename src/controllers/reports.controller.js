const ReportService = require('../services/reports.services');
const Utils = require('../utils/Utils');

const getReportGeneral = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportGeneral(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getReportMenorFive = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportMenorFive(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getReportBreakFast = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportBreakFast(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getReportLunches = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportLunches(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getReportHistory = async (req, res) => {
    try {
        const school_id = Utils.decode(req.params.school_id);
        const result = await ReportService.getReportHistory(school_id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

const getReportHistoryByClient = async (req, res) => {
    try {
        const client_ci = req.params.client_ci;
        const result = await ReportService.getReportHistoryByClient(client_ci);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getReportGeneral,
    getReportMenorFive,
    getReportBreakFast,
    getReportLunches,
    getReportHistory,
    getReportHistoryByClient,
}