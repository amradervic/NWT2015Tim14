<?php
/* @var $this PrivatnaPorukaController */
/* @var $dataProvider CActiveDataProvider */

$this->breadcrumbs=array(
	'Privatna Porukas',
);

$this->menu=array(
	array('label'=>'Create PrivatnaPoruka', 'url'=>array('create')),
	array('label'=>'Manage PrivatnaPoruka', 'url'=>array('admin')),
);
?>

<h1>Privatna Porukas</h1>

<?php $this->widget('zii.widgets.CListView', array(
	'dataProvider'=>$dataProvider,
	'itemView'=>'_view',
)); ?>
