<?php
/* @var $this RecenzijaController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Recenzijas',
);

$this->menu=array(
	array('label'=>'Create Recenzija', 'url'=>array('create')),
	array('label'=>'Manage Recenzija', 'url'=>array('admin')),
);
?>

<h1>Recenzijas</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
