import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('เครื่องดับ กล้องดับ 3 ตัว', 'ในประกัน', 'ปู', 'คุณ สยามชัย', '0919989994'),
    createData('ประตูไม่เปิด กดรีโมตหลายครั้งแล้ว', 'ในประกัน', 'ส้ม', 'คุณ เอก', '034426934'),
    createData('กล้องดูออนไลน์ไม่ได้ เน็ตทรู', 'นอกประกัน', 'ปู', 'คุณ พิบูรณ์', '0919989994'),
    createData('สัญญาณ กันขโมยบ้าน ไม่ดัง', 'ในประกัน', 'เฟิร์ส', 'คุณ สมชาย', '0919989994'),
    createData('กล้องติดๆ ดับๆ', 'นอกประกัน', 'ส้ม', 'คุณ เอก', '034426934'),
];

function SimpleTable(props) {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>รายการติดต่อจากลูกค้า</TableCell>
                        <TableCell>ใน / นอก ประกัน</TableCell>
                        <TableCell>ผู้รับเรื่อง</TableCell>
                        <TableCell numeric>ชื่อ</TableCell>
                        <TableCell numeric>เบอร์ติดต่อ</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell component="th">{row.calories}</TableCell>
                                <TableCell component="th">{row.fat}</TableCell>
                                <TableCell numeric>{row.carbs}</TableCell>
                                <TableCell numeric>{row.protein}</TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

SimpleTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);