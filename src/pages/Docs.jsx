import DrawerAppBar from '../components/DrawerAppBar.jsx';

import { Container, Typography, Box } from '@mui/material';

const sectionStyle = {
    marginBottom: '40px',
};

const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '20px',
};

const thStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
};

const tdStyle = {
    padding: '12px',
    border: '1px solid #ccc',
    textAlign: 'left',
};

const Docs = () => {
    return (
        <Container>
            <DrawerAppBar />

            <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
                <Box>
                    <Typography variant="h4" gutterBottom>
                        🧾 Define List Generator Tool – Documentation
                    </Typography>
                    <Typography variant="body1" paragraph>
                        This tool helps you create define lists for Decipher surveys with support for grouping, styling, and exporting.
                    </Typography>
                </Box>



                <div style={sectionStyle}>
                    <h2>🧩 Tool Components</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Field / Button</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>List Name</td><td style={tdStyle}>Enter the name or label for your define list.</td></tr>
                            <tr><td style={tdStyle}>List Rows</td><td style={tdStyle}>Input the text for each row in the list.</td></tr>
                            <tr><td style={tdStyle}>Row Label Prefix</td><td style={tdStyle}>Prefix for row labels (e.g., Br, Mr etc).</td></tr>
                            <tr><td style={tdStyle}>Add Row Values (Checkbox)</td><td style={tdStyle}>Enable to include values in each row.</td></tr>
                            <tr><td style={tdStyle}>Collapse Duplicates (Checkbox)</td><td style={tdStyle}>Enable to merge duplicate rows and stylevars.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>🧮 Grouping Features</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Field / Button</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>Add Group Button</td><td style={tdStyle}>Adds fields to assign groups to rows.</td></tr>
                            <tr><td style={tdStyle}>Group Values</td><td style={tdStyle}>Assign group names to each row.</td></tr>
                            <tr><td style={tdStyle}>Group Label</td><td style={tdStyle}>Label for each group. (e.g., g1, g2 etc</td></tr>
                            <tr><td style={tdStyle}>Group Name</td><td style={tdStyle}>Name for each group. (e.g., Premium Brands, Local Brands.</td></tr>
                            <tr><td style={tdStyle}>Remove Group Button</td><td style={tdStyle}>Deletes a specific group.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>🎨 Stylevar Features</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Field / Button</th>
                                <th style={thStyle}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>Add Stylevar Button</td><td style={tdStyle}>Adds fields to assign stylevars to rows.</td></tr>
                            <tr><td style={tdStyle}>Stylevar Values</td><td style={tdStyle}>Assign stylevar values to each row.</td></tr>
                            <tr><td style={tdStyle}>Stylevar Name</td><td style={tdStyle}>Name of the stylevar (e.g., category, country etc).</td></tr>
                            <tr><td style={tdStyle}>Remove Stylevar Button</td><td style={tdStyle}>Deletes a specific stylevar.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>🧼 Utility Buttons</h2>
                    <table style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={thStyle}>Button</th>
                                <th style={thStyle}>Function</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td style={tdStyle}>Reset All Button</td><td style={tdStyle}>Clears all fields and resets the tool for fresh start.</td></tr>
                            <tr><td style={tdStyle}>Generate List Button</td><td style={tdStyle}>Compiles inputs into a formatted define list.</td></tr>
                            <tr><td style={tdStyle}>Output Field Box</td><td style={tdStyle}>Displays the generated define list.</td></tr>
                            <tr><td style={tdStyle}>Download as File Button</td><td style={tdStyle}>Saves the output as a text file.</td></tr>
                            <tr><td style={tdStyle}>Copy to Clipboard Button</td><td style={tdStyle}>Copies the output to your system clipboard.</td></tr>
                            <tr><td style={tdStyle}>Clear Output Button</td><td style={tdStyle}>Clears the output field.</td></tr>
                        </tbody>
                    </table>
                </div>

                <div style={sectionStyle}>
                    <h2>✅ Example Workflow</h2>
                    <ol>
                        <li>Enter a <strong>List Name</strong> e.g. brandsList, modelsList etc</li>
                        <li>Add items in <strong>List Rows</strong> e.g. Apple, Samsung, Apple, Xiaomi.</li>
                        <li>Set <strong>Row Label Prefix</strong> e.g. Br, Mr etc.</li>
                        <li>Enable <strong>Add Row Values</strong> and <strong>Collapse Duplicates</strong> if needed.</li>
                        <li>Use <strong>Add Group</strong> and <strong>Add Stylevar</strong> as needed.</li>
                        <li>Click <strong>Generate List</strong> to generate the output.</li>
                        <li>Use <strong>Download as File</strong>, <strong>Copy to Clipboard</strong>, or <strong>Clear Output</strong> as needed.</li>
                    </ol>
                </div>
            </div>
        </Container>
    );
};

export default Docs;